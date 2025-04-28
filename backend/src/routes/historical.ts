import { Router, Request, Response } from 'express';
import { fetchRates } from '../utils/fetchRates';

const router = Router();

// 특정 날짜의 환율 정보 가져오기
router.get('/', async (req: Request, res: Response) => {
    try {
        const base = typeof req.query.base === 'string' ? req.query.base : 'KRW';
        const symbols = typeof req.query.symbols === 'string' ? req.query.symbols : undefined;
        const date = typeof req.query.date === 'string' ? req.query.date : undefined;

        if(!date) {
            res.status(400).json({ success: false, message: '날짜를 입력해주세요.' });
            return;
        }

        const response = await fetchRates({ base, symbols, date });

        res.json({
            success: true,
            base: response.base,
            date: response.date,
            rates: response.rates,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: `${req.query.date}의 환율 정보를 가져오지 못했습니다. ${error}` });
    }
});

export default router;