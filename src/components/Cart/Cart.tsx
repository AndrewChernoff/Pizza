import { IconContext } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";
import darkCart from "../../assets/icons/dark_cart_icon.svg";
import { useAppSelector } from "../../hooks/hooks";
import "./Cart.scss";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cart);
  const dough = ["тонкое", "традиционное"];
  let totalQuantity = 0;

  cartItems.forEach(el => totalQuantity += el.quantity)

  return (
    <div className="wrapper">
      {cartItems.length !== 0 ? (
        <div className="cart">
          <div className="cart__container">
            <div className="cart__title">
              <img src={darkCart} alt="cart image" /> <h2>Корзина</h2>{" "}
            </div>
            <div className="cart__items">
              {cartItems.map(({ id, imageUrl, name, type, size, quantity, price }) => {
                return (
                  <div key={id} className="cart__item">
                    <div className="cart__item_main-info">
                    <img className="cart__item_img" src={imageUrl} alt={name} />
                    <div className="cart__item_info">
                      <div className="cart__item_info_title">  {name} </div>
                        <div className="cart__item_info_subtitle">{dough[type]} тесто, {size} см.</div>
                      </div>
                    </div>
          
                    <div className="cart__item_quantity">
                      <button>+</button> <span> {quantity} </span> <button>-</button>
                    </div>
                    
                    <div className="cart__item_price">
                      {price * quantity} &#8381;
                    </div>
                    <IconContext.Provider value={{ className: "cart__item_close" }}>
                    <AiOutlineCloseCircle/>
                    </IconContext.Provider>
                  </div>
                );
              })}
            </div>

            <div>Всего пицц: {totalQuantity}шт</div>

          </div>
        </div>
      ) : (
        <div>Корзина пуста</div>
      )}
    </div>
  );
};

export default Cart;
