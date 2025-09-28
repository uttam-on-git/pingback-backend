import { Router } from 'express';
import passport from 'passport';
import { generateToken } from './auth.controller';

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/gmail.send'],
    accessType: 'offline',
    prompt: 'consent',
  }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login-failed',
    session: false,
  }),
  generateToken,
);

export default router;
