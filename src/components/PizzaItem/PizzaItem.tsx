import PropTypes  from "prop-types";
import { useRef, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { addItem } from "../../redux/cart/cart";
import { CartItem } from "../../redux/cart/cartStyle";
import { useAppDispatch } from "../store/store";

type Props = {
    params: any,
    onAddBtnClick: () => void,

}

const PizzaItem = (props:any) => {
  let { id, name, imageUrl, sizes, price } = props.params;
  const [sizeIndex, setSizeIndex] = useState(0);
  const pizzaRef: Ref = useRef([]);
  const [dough, setDough] = useState(0);
  const doughType = ["тонкое", "традиционное"];
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart); //getting products from cart for  adding quantity to Add pizza button
  type Ref = {
    current: any[];
  };


  const findPizzaFromCart = (pizzaId: number) => {
    let addedItem = cart.find((el) => el.id === pizzaId);
    if (cart.length !== 0 && addedItem) {
      return addedItem.quantity;
    }
  };

  const onAddBtnClick = (obj: CartItem) => {
    dispatch(addItem(obj));
    findPizzaFromCart(obj.id);
  };


    return (
      <div
      tabIndex={1}
      key={id}
      className="pizzas__item"
      ref={(element) => pizzaRef.current.push(element)}
    >
      <img src={imageUrl} className="pizzas__item_img" />
      <div className="pizzas__item_title">{name}</div>

      <div className="pizzas__item_params">
        <div className="pizzas__item_params_doughs">
          {doughType.map((el, i) => {
            return (
              <div
                key={i}
                onClick={() => setDough(i)}
                className={`${
                  dough === i
                    ? "pizzas__item_params_doughs_item_active"
                    : "pizzas__item_params_doughs_item"
                }`}
              >
                {el}
              </div>
            );
          })}
        </div>
        <div className="pizzas__item_params_size">
           {sizes.map((el:any, i:number) => {
            return (
              <button
                key={i}
                onClick={() => {
                  console.log(i)
                  setSizeIndex(i)
                }}
                tabIndex={1}
                className={
                  sizeIndex === i
                    ? "pizzas__item_params_size_item_active"
                    : "pizzas__item_params_size_item"
                }
              >
                {el}
              </button>
            );
          })}
        </div>
      </div>
      <div className="pizzas__item_manipulations">
        <div className="pizzas__item_manipulations_price">{price} p</div>
        <button
          onClick={() =>
            onAddBtnClick({
              id: id,
              imageUrl: imageUrl,
              name: name,
              quantity: 1,
            })
          }
          className="pizzas__item_manipulations_btn"
        >
          + Добавить {findPizzaFromCart(id)}
        </button>
      </div>
    </div> 
    )
}
export default PizzaItem;