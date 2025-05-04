import { Router } from 'express';
import latestRates from './latest';
import historicalRates from './historical';

const router = Router();

// 최근 환율 정보 가져오기
router.use('/latest', latestRates);
// 특정 날짜의 환율 정보 가져오기
router.use('/historical', historicalRates);

export default router;