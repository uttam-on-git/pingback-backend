import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodObject } from 'zod';

export const validate =
  (schema: ZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.issues.map((issue) => issue.message);

        return res.status(400).json({
          message: errorMessages.join('. '),
          errors: errorMessages,
        });
      }

      return res.status(400).json({
        message: 'Validation failed',
      });
    }
  };
