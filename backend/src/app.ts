import express from 'express';
import ratesRouter from './routes/rates/index';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/rates', ratesRouter);

export default app;