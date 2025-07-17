import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const PIXEL_DATA = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64',
);

export const trackEmailOpen = async (req: Request, res:Response) => {
    try {
        const { emailId } = req.params;
        prisma.emailOpen.create({
          data: {
            emailId: emailId,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent')
          }
        })
        .catch((error: unknown) => {
          console.error(
          `[DATABASE_ERROR] Failed to log email open for ID ${emailId}:`,
          error,
        );
        })
    } catch (error) {
         console.error(`[TRACKER_ERROR] Failed to process tracking request:`, error);
    } finally {
      res.set({
      'Content-Type': 'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate, private',
    });
    res.send(PIXEL_DATA);
    }
}