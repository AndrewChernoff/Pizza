import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import useApi from "../../hooks/useApi";
import { addItem } from "../../redux/cart/cart";
import { CartItem } from "../../redux/cart/cartStyle";
import { fetchPizza } from "../../redux/pizzas/pizzasSlice";
import "./Pizzas.scss";

const Pizzas = () => {
  const { request } = useApi();
  const dispatch = useDispatch();
  const { pizzas } = useAppSelector((state) => state.pizza);
  const pizzaRef: Ref = useRef([]);

  const {cart} = useAppSelector((state) => state.cart); //getting products from cart for  adding quantity to Add pizza button

  const findPizzaFromCart = (pizzaId: number) => {
    let addedItem = cart.find((el) => el.id === pizzaId)
    if(cart.length !== 0 && addedItem) {
      return addedItem.quantity;
    }
  };

  useEffect(() => {
    request("http://localhost:3001/pizzas").then((res: any): void => {
      dispatch(fetchPizza(res));
    });
  }, []);

  type Ref = {
    current: any[];
  };

  const onAddBtnClick = (obj: CartItem) => {
    dispatch(addItem(obj));
    findPizzaFromCart(obj.id)
    //console.log(obj.id)
  };

  const buttonsData = [
    { id: 1, name: "Все" },
    { id: 2, name: "Мясные" },
    { id: 3, name: "Вегетарианская" },
    { id: 4, name: "Гриль" },
    { id: 5, name: "Острые" },
    { id: 6, name: "Закрытые" },
  ];

  const buttons = buttonsData.map(({ name, id }) => {
    return (
      <button key={id} className="pizzas__btns_item">
        {name}
      </button>
    );
  });

  const onPizzaClick = (i: number): void => {
    pizzaRef.current[i].focus();
  };

  const pizzaItems = pizzas.map(({id, name, imageUrl, sizes, price}) => {
    return (
      <div
        tabIndex={1}
        key={id}
        onClick={() => onPizzaClick(id)}
        className="pizzas__item"
        ref={(element) => pizzaRef.current.push(element)}
      >
        <img src={imageUrl} className="pizzas__item_img" />
        <div className="pizzas__item_title">{name}</div>

        <div className="pizzas__item_params">
          <div className="pizzas__item_params_doughs">
            <div className="pizzas__item_params_doughs_item">тонкое</div>
            <div className="pizzas__item_params_doughs_itemactive">
              традиционное
            </div>
          </div>
          <div className="pizzas__item_params_size">
            <button className="pizzas__item_params_size_item_active">
              {sizes[0]}
            </button>
            <button className="pizzas__item_params_size_item">
              {sizes[1]}
            </button>
            <button
              disabled={!sizes[2] ? true : false}
              className="pizzas__item_params_size_item"
            >
              {!sizes[2] ? "40 p" : sizes[2]}
            </button>
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
            + Добавить {findPizzaFromCart(id) }
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="pizzas">
      {/* need to work on active classname styles  */}
      <div className="pizzas__btns">{buttons}</div>
      <h2 className="pizzas__title">Все пиццы</h2>
      <div className="pizzas__items">{pizzaItems}</div>
    </div>
  );
};

export default Pizzas;
