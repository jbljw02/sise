import { makeAutoObservable, toJS } from "mobx";
import { Rates } from "../types/rate.type";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

interface ExchangeRateData {
    base: string; // 기준 통화(예: KRW)
    date: string; // 환율 데이터 날짜
    rates: Rates; // 각 통화별 환율 정보
}

// 환율 정보를 관리하는 클래스
class ExchangeRateStore {
    // 초기 상태
    data: ExchangeRateData = {
        base: "",
        date: "",
        rates: {},
    };

    loading = false;
    error: string | null = null;

    constructor() {
        // 생성자에서 MobX의 자동 관찰 설정(데이터가 바뀌면 컴포넌트가 리렌더링 되도록)
        makeAutoObservable(this);
    }

    // 상태 업데이트 메서드
    setExchangeRate(data: ExchangeRateData) {
        this.data = data;
    }

    // 특정 날짜의 환율 정보를 요청
    async fetchExchangeRate() {
        this.loading = true;
        this.error = null;
        try {
            const response = await axios.get(`${API_URL}/api/rates/latest`);
            this.setExchangeRate(response.data);
        } catch (e: any) {
            this.error = e.message || "환율 정보를 불러오지 못했습니다.";
        } finally {
            this.loading = false;
        }
    }

    // 항상 JSON 형식으로 반환
    get json() {
        return toJS(this.data);
    }
}

const exchangeRateStore = new ExchangeRateStore();
export default exchangeRateStore;