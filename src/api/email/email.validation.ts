import { z } from 'zod';

export const sendEmailSchema = z.object({
  body: z.object({
    recipient: z.email({ error: 'Invalid email address' }),
    subject: z
      .string({ error: 'Subject must be a string' })
      .min(1, { error: 'Subject cannot be empty' }),
    body: z
      .string({ error: 'Body must be a string' })
      .min(1, { error: 'Body cannot be empty' }),
  }),
});
