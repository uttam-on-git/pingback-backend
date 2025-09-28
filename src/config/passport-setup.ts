// src/config/passport-setup.ts

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/api/auth/google/callback',
      // 'gmail.send' SCOPE HERE
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/gmail.send'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) {
          return done(new Error('No email found in Google profile'), false);
        }

        let user = await prisma.user.findUnique({
          where: { email: email },
        });

        if (user) {
          user = await prisma.user.update({
            where: { email: email },
            data: {
              googleId: profile.id,
              refreshToken: refreshToken,
            },
          });
          return done(null, user);
        } else {
          user = await prisma.user.create({
            data: {
              googleId: profile.id,
              name: profile.displayName,
              email: email,
              refreshToken: refreshToken,
            },
          });
          return done(null, user);
        }
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);
