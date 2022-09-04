import './Header.scss';
import cart from "../../assets/icons/cart_icon.svg"
import pizza from "../../assets/logo/pizza_logo.png";
import { useAppSelector } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

  //const [isClosed, setIsClosed ] = useState(false) try to make onClick to needed link
  const cartItems = useAppSelector(state => state.cart.cart)

  let headerPrice = 0;
  let headerQuantity = 0;

  cartItems.forEach(el => (headerQuantity += el.quantity));
  cartItems.forEach(el => (headerPrice += el.price));

  return (
    <header>
      <Link to='' className="header__logo">
        <img src={pizza} />
        <div className="header__logo-content">
          <h2 className="header__logo-title">REACT PIZZA</h2>
          <div className="header__logo-subtitle">самая вкусная пицца во вселенной</div>
        </div>
      </Link>

      <Link to='/cart' className="header__cart__btn">
        <div className="header__cart__btn_price"> {headerPrice}&#8381; </div> 
        <div> <img src={cart}/> <div> {headerQuantity} </div> </div>
        </Link>
    </header>
  );
};

export default Header;
