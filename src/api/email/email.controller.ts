import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();
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
    // create a record for the email in our database
    const trackedEmail = await prisma.trackedEmail.create({
      data: {
        userId: userId,
        subject,
        recipient,
      },
    });

    // construct the tracking pixel URL
    const trackingPixelUrl = `${process.env.BACKEND_URL}/api/email/track/${trackedEmail.id}`;
    const trackingPixelHtml = `<img src="${trackingPixelUrl}" width="1" height="1" style="display:none;" />`;

    //inject pixel into the email body
    const emailBodyWithPixel = `${trackingPixelHtml}${body}`;

    console.log('--- HTML being sent to Nodemailer ---');
    console.log(emailBodyWithPixel);
    console.log('------------------------------------');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const sender = await prisma.user.findUnique({ where: { id: userId } });

    // send the email
    await transporter.sendMail({
      from: `"${sender?.name || 'PingBack User'}" <${process.env.GMAIL_USER}>`,
      to: recipient,
      subject: subject,
      html: emailBodyWithPixel,
    });

    res.status(200).json({ message: 'Email sent and is now being tracked.' });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
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
      // count of the related 'opens' for each email
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
