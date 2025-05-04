import axios from 'axios';

interface FetchRatesProps {
    date?: string; // 조회할 날짜
    base?: string; // 기준 통화
    symbols?: string; // 원하는 통화 코드
}

// 파라미터에 따라 환율 정보를 유동적으로 요청
export const fetchRates = async ({ date, base = 'KRW', symbols }: FetchRatesProps) => {
    // 지정된 날짜가 있을 경우 지정된 날짜의 환율 정보를 요청
    // 없을 경우 최근 환율 정보를 요청
    let url = date
        ? `https://api.frankfurter.dev/v1/${date}?base=${base}`
        : `https://api.frankfurter.dev/v1/latest?base=${base}`;

    // 특정 통화 코드가 주어질 경우 추가
    if (symbols) url += `&symbols=${symbols}`;

    const response = await axios.get(url);
    return response.data;
}