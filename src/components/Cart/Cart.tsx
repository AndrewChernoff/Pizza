import darkCart from "../../assets/icons/dark_cart_icon.svg";
import { useAppSelector } from "../../hooks/hooks";
import "./Cart.scss";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cart);
    const dough = ['тонкое', 'традиционное'];

  return (
    <div className="wrapper">
    {cartItems.length !== 0 ? 
     <div className="cart">
     <div className="cart__container">
       <div className="cart__title">
         <img src={darkCart} alt="cart image" /> <h2>Корзина</h2>{" "}
       </div>
       <div className="cart__items">
         {
             cartItems.map(({id, imageUrl, name, type}) => {
                 return <div key={id} className="cart__item">
                     <img className="cart__item_img" src={imageUrl} alt={name}/>
                     <div className="cart__item">
                         {name}
                     <div className="cart__item_info">
                         {dough[type]} тесто,
                     </div>
                     </div>
                 </div>
             })
         }
       </div>
     </div>
   </div>
: <div>Корзина пуста</div>} 
    </div>
  );
};

export default Cart;
