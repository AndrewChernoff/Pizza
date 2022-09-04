import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
