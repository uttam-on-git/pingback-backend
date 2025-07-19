import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
interface TokenPayload {
  id: string;
}

export const ensureAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in the environment');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded as TokenPayload;
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;

    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
