import { Router } from 'express';
import { getHistoricalRates } from '../../controllers/ratesController';

const router = Router();

// 특정 날짜의 환율 정보 가져오기
router.get('/', getHistoricalRates);

export default router;