import { Router, Request, Response } from 'express';
import { fetchRates } from '../utils/fetchRates';

const router = Router();

// 최근 환율 정보 가져오기
router.get('/', async (req: Request, res: Response) => {
  try {
    const base = typeof req.query.base === 'string' ? req.query.base : 'KRW';
    const symbols = typeof req.query.symbols === 'string' ? req.query.symbols : undefined;

    const response = await fetchRates({ base, symbols });

    res.json({
      success: true,
      base: response.base,
      date: response.date,
      rates: response.rates,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: `최근 환율 정보를 가져오지 못했습니다. ${error}` });
  }
});

export default router;