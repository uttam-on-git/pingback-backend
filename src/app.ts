import express from 'express';
import cors from 'cors';
import passport from 'passport';
import './config/passport-setup';
import emailRoutes from './api/email/email.route';
import authRoutes from './api/auth/auth.route';
import rateLimit from 'express-rate-limit';
import aiRoutes from './api/ai/ai.route';
import helmet from 'helmet';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

//allowed origins
const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:5173'];

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void,
  ) => {
    // allow requests with no origin (mobile or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
};

app.use(helmet());
app.set('trust proxy', 1);

//middleware
app.use('/api', limiter);
app.use(cors(corsOptions));
app.use(express.json());
app.use(passport.initialize()); // initialize passport
app.use('/api/ai', aiRoutes);

//API routes
app.use('/api/email', emailRoutes);
app.use('/api/auth', authRoutes);

//test base route to make sure server is alive
app.get('/', (req, res) => {
  res.send('PingBack API is running!');
});

export default app;
