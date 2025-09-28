import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { google } from 'googleapis';
import { encode } from 'js-base64';

const prisma = new PrismaClient();

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  '/api/auth/google/callback',
);

const PIXEL_DATA = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64',
);

export const trackEmailOpen = async (req: Request, res: Response) => {
  try {
    const { emailId } = req.params;
    await prisma.emailOpen
      .create({
        data: {
          emailId: emailId,
          ipAddress: req.ip,
          userAgent: req.get('User-Agent'),
        },
      })
      .catch((error: unknown) => {
        console.error(
          `[DATABASE_ERROR] Failed to log email open for ID ${emailId}:`,
          error,
        );
      });
  } catch (error) {
    console.error(`[TRACKER_ERROR] Failed to process tracking request:`, error);
  } finally {
    res.set({
      'Content-Type': 'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate, private',
    });
    res.send(PIXEL_DATA);
  }
};

export const sendTrackedEmail = async (req: Request, res: Response) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'User not authenticated' });
  }
  const userId = req.user!.id;
  const { recipient, subject, body } = req.body;

  if (!recipient || !subject || !body) {
    return res
      .status(400)
      .json({ message: 'Recipient, subject, and body are required' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.refreshToken) {
      return res.status(401).json({
        message:
          'User is not properly authenticated or has no permission to send email.',
      });
    }

    oAuth2Client.setCredentials({ refresh_token: user.refreshToken });

    const trackedEmail = await prisma.trackedEmail.create({
      data: { userId: userId, subject, recipient },
    });

    const trackingPixelUrl = `${process.env.BACKEND_URL}/api/email/track/${trackedEmail.id}`;
    const trackingPixelHtml = `<img src="${trackingPixelUrl}" width="1" height="1" style="display:none;" />`;
    const emailBodyWithPixel = `${trackingPixelHtml}${body}`;

    const emailLines = [
      `From: "${user.name}" <${user.email}>`,
      `To: ${recipient}`,
      'Content-Type: text/html; charset=utf-8',
      'MIME-Version: 1.0',
      `Subject: ${subject}`,
      '',
      emailBodyWithPixel,
    ];
    const email = emailLines.join('\r\n');

    const base64EncodedEmail = encode(email, true);

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: base64EncodedEmail,
      },
    });

    res.status(200).json({ message: 'Email sent and is now being tracked.' });
  } catch (error: unknown) {
    // Safely log the error
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
    } else {
      console.error('An unknown error occurred while sending email:', error);
    }

    res
      .status(500)
      .json({ message: 'An error occurred while sending the email.' });
  }
};

export const getSentEmails = async (req: Request, res: Response) => {
  const userId = req.user!.id;
  try {
    const emails = await prisma.trackedEmail.findMany({
      where: {
        userId: userId,
      },
      include: {
        _count: {
          select: { opens: true },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.status(200).json(emails);
  } catch (error) {
    console.error('Error fetching sent emails:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching emails.' });
  }
};

export const getEmailDetails = async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const { id: emailId } = req.params;

  try {
    const email = await prisma.trackedEmail.findUnique({
      where: {
        id: emailId,
      },
      include: {
        opens: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!email || email.userId !== userId) {
      return res.status(404).json({ message: 'Email not found' });
    }

    res.status(200).json(email);
  } catch (error: unknown) {
    console.error('Error fetching email details:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching email details.' });
  }
};
