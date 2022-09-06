import { Link } from "react-router-dom";
import emptyCart from "../../assets/imgs/emptyCart.png";
import "./EmptyCart.scss";

const EmptyCart = () => {
  return (
    <div className="empty_cart">
      <div className="empty_cart__content">
        <h2 className="empty_cart__title">Корзина пустая &#128533;</h2>
        <div className="empty_cart__descr">
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </div>
      </div>
      <img className="empty_cart__img" src={emptyCart} />

      <Link to="/" className="empty_cart__back">
        Вернуться назад
      </Link>
    </div>
    
  );
};

export default EmptyCart;
