import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB 연결
export const connectDB = async () => {
    try {
        // 연결 시도
        await mongoose.connect(MONGODB_URI!);
        console.log('MongoDB 연결 성공');

        // 연결 이벤트 리스너
        mongoose.connection.on('connected', () => {
        });

        // 연결 실패 이벤트 리스너
        mongoose.connection.on('error', (error) => {
            console.error('MongoDB 연결 에러:', error);
        });

        // 연결 해제 이벤트 리스너
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB 연결이 끊어졌습니다.');
        });

    } catch (error) {
        // 연결 실패 시 에러 로깅 및 프로세스 종료
        console.error('MongoDB 연결 실패:', error);
        process.exit(1);
    }
};