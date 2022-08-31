import './Header.scss';
import pizza from "../../assets/logo/pizza_logo.png";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <img src={pizza} />
        <div className="header__logo-content">
          <h2 className="header__logo-title">REACT PIZZA</h2>
          <div className="header__logo-subtitle">самая вкусная пицца во вселенной</div>
        </div>
      </div>

      <div className="header__cart__btn">
       <div> 520p | 1 </div> 
      </div>
    </header>
  );
};

export default Header;
