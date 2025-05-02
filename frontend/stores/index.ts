import exchangeRateStore from "./exchangeRateStore";
import { createContext, useContext } from "react";

export const stores = {
    exchangeRateStore,
};


/*
    ** 전역 스토어 컨텍스트 **
    Provider의 value에 다른 store 인스턴스를 상황에 따라 주입 가능
    단순 객체 export 방식은 항상 동일한 store 인스턴스를 사용해야 함
*/
export const StoresContext = createContext(stores);
export const useStores = () => useContext(StoresContext);