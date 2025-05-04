// dotenv를 실행되기 전에 다른 파일에서 환경 변수를 읽으면 안 됨
import dotenv from 'dotenv';
dotenv.config();

import app from './app';

import { connectDB } from './config/database';

connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});