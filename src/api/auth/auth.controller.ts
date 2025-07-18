import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = (req: Request, res: Response) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET not defined in .env file');
  }
  const user = req.user as { id: string; email: string };
  if (!user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }
  //payload for the token
  const payload = {
    id: user.id,
    email: user.email,
  };

  //sign the token
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d', // expires in 1 day
  });

  res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
};
