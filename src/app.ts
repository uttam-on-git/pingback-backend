import express from 'express';
import cors from 'cors';
import emailRoutes from './api/email/email.route'
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//API routes
app.use('/api/email', emailRoutes)

//test base route to make sure server is alive
app.get('/', (req, res) => {
  res.send('PingBack API is running!');
});

export default app;
