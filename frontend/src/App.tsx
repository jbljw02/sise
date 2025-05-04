import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { StoresContext } from "../stores";
import { stores } from "../stores";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <StoresContext.Provider value={stores}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </StoresContext.Provider>
  )
}

export default App;