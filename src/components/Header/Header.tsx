import './Header.scss';
import cart from "../../assets/icons/cart_icon.svg"
import pizza from "../../assets/logo/pizza_logo.png";
import { useAppSelector } from '../../hooks/hooks';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  let location = useLocation();
  const cartItems = useAppSelector(state => state.cart.cart)

  let headerPrice = 0;
  let headerQuantity = 0;

  cartItems.forEach(el => (headerQuantity += el.quantity));
  cartItems.forEach(el => (headerPrice += (el.price * el.quantity)));
 
 let cartLink;

  if(location.pathname === '/cart') {
    cartLink = null 
  } else {
    cartLink = <Link to='/cart' className="header__cart__btn">
    <div className="header__cart__btn_price"> {headerPrice}&#8381; </div> 
    <div> <img src={cart}/> <div> {headerQuantity} </div> </div>
  </Link>
  }

  return (
    <header>
      <Link to='' className="header__logo">
        <img src={pizza} />
        <div className="header__logo-content">
          <h2 className="header__logo-title">REACT PIZZA</h2>
          <div className="header__logo-subtitle">самая вкусная пицца во вселенной</div>
        </div>
      </Link>

    {cartLink}

      {/* <Link to='/cart' className="header__cart__btn">
        <div className="header__cart__btn_price"> {headerPrice}&#8381; </div> 
        <div> <img src={cart}/> <div> {headerQuantity} </div> </div>
      </Link> */}
    </header>
  );
};

export default Header;
