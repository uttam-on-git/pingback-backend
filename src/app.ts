import express from 'express';
import cors from 'cors';
import passport from 'passport';
import './config/passport-setup';
import emailRoutes from './api/email/email.route';
import authRoutes from './api/auth/auth.route';

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize()); // initialize passport

//API routes
app.use('/api/email', emailRoutes);
app.use('/api/auth', authRoutes);

//test base route to make sure server is alive
app.get('/', (req, res) => {
  res.send('PingBack API is running!');
});

export default app;
