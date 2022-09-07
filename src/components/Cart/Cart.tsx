import { useAppSelector } from "../../hooks/hooks";
import CartItems from "../CartItems/CartItems";
import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cart);
  let totalQuantity = 0;
  let totalPrice = 0

  cartItems.forEach(el => totalQuantity += el.quantity)
  cartItems.forEach(el => totalPrice += (el.price * el.quantity))

  return (
    <div className="wrapper">
      {cartItems.length !== 0 ? (
        <CartItems/>
      ) : (
        <EmptyCart/>
      )}
    </div>
  );
};

export default Cart;
