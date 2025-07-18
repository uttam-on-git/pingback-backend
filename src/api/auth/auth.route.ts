import { Router } from 'express';
import passport from 'passport';
import { generateToken } from './auth.controller';

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login-failed', // A route to redirect to on failure
    session: false, // We are using JWTs, not sessions
  }),
  generateToken,
);

export default router;
