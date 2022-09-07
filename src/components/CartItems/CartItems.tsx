import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import darkCart from "../../assets/icons/dark_cart_icon.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Button, Modal } from "antd";
import {
  clearCart,
  decrement,
  deleteItem,
  increment,
} from "../../redux/cart/cart";
import "antd/dist/antd.css";
import "../Cart/Cart.scss";

const CartItems = () => {
  const cartItems = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dough = ["тонкое", "традиционное"];
  let totalQuantity = 0;
  let totalPrice = 0;

  cartItems.forEach((el) => (totalQuantity += el.quantity));
  cartItems.forEach((el) => (totalPrice += el.price * el.quantity));
  return (
    <div className="cart">
      <div className="cart__container">
        <header className="cart__header">
          <div className="cart__title">
            <img src={darkCart} alt="cart image" /> <h2>Корзина</h2>
          </div>
          <div onClick={() => dispatch(clearCart())} className="cart__clear">
            <IconContext.Provider value={{}}>
              <FaRegTrashAlt />
            </IconContext.Provider>
            Очистить корзину
          </div>
        </header>

        <TransitionGroup className="cart__items">
          {cartItems.map(
            ({ id, imageUrl, name, type, size, quantity, price }) => {
              return (
                ///transition
                <CSSTransition key={id} timeout={500} classNames="itemq">
                  <div key={id} className="cart__item">
                    <div className="cart__item_main-info">
                      <img
                        className="cart__item_img"
                        src={imageUrl}
                        alt={name}
                      />
                      <div className="cart__item_info">
                        <div className="cart__item_info_title"> {name} </div>
                        <div className="cart__item_info_subtitle">
                          {dough[type]} тесто, {size} см.
                        </div>
                      </div>
                    </div>

                    <div className="cart__item_quantity">
                      <button onClick={() => dispatch(increment(id))}>+</button>
                      <span> {quantity} </span>
                      <button onClick={() => dispatch(decrement(id))}>-</button>
                    </div>

                    <div className="cart__item_price">
                      {price * quantity} &#8381;
                    </div>

                    <IconContext.Provider
                      value={{ className: "cart__item_close" }}
                    >
                      <AiOutlineCloseCircle
                        onClick={() => dispatch(deleteItem(id))}
                      />
                    </IconContext.Provider>
                  </div>
                </CSSTransition>
              );
            }
          )}
        </TransitionGroup>

        <footer className="cart__footer">
          <div className="cart__footer_quantity">
            <div className="cart__footer_quantity-total">
              Всего пицц:{" "}
              <span style={{ fontWeight: "bold" }}>{totalQuantity}шт.</span>
            </div>
            <Link to="/" className="cart__footer-back">
              <div>Вернуться назад</div>
            </Link>
          </div>

          <div className="cart__footer_total">
            <div className="cart__footer_total-price">
              Сумма заказа:{" "}
              <span style={{ color: "#FE5F1E", fontWeight: "bold" }}>
                {totalPrice} &#8381;
              </span>
            </div>
            <>
              <Button
                type="primary"
                className="cart__footer_total-pay"
                onClick={showModal}
              >
                Оплатить сейчас
              </Button>
              <Modal
                title="Оплата"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p> Итого к оплате: {totalPrice} рублей</p>
              </Modal>
            </>
            {/* <button className="cart__footer_total-pay">Оплатить сейчас</button> */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CartItems;
