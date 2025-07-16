import express from 'express';
import cors from 'cors';
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//test route to make sure server is alive
app.get('/', (req, res) => {
  res.send('PingBack API is running!');
});
