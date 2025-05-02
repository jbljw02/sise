import { useEffect } from "react";
import { useStores } from "../../stores";
import { observer } from "mobx-react-lite";

const MainPage = observer(() => {
    const { exchangeRateStore } = useStores();
  
    useEffect(() => {
      const fetchData = async () => {
        await exchangeRateStore.fetchExchangeRate();
      };
      fetchData();
    }, []);
    
    return (
        <div>
            <h1>MainPage</h1>
        </div>
    )
})

export default MainPage;