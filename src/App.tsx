import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import { useAppSelector } from "./hooks/hooks";
import useApi from "./hooks/useApi";


const App = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const { request } = useApi();

  useEffect(() => {
    request('https://shoppingcart-379da-default-rtdb.firebaseio.com/cartItems.json', 'PUT', JSON.stringify(cart))
  }, [cart]);

  return (
    <div className="main_wrapper">
      <div className="wrapper">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
