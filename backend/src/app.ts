import express from 'express';
import ratesRouter from './routes/rates';
import historicalRouter from './routes/historical';

const app = express();

app.use(express.json());
app.use('/api/rates', ratesRouter);
app.use('/api/historical', historicalRouter);

export default app;