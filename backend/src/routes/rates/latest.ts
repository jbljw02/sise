import { Router } from 'express';
import { getLatestRates } from '../../controllers/ratesController';

const router = Router();

// 최근 환율 정보 가져오기
router.get('/', getLatestRates);

export default router;