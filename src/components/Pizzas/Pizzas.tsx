import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useApi from "../../hooks/useApi";
import { fetchPizza } from "../../redux/pizzas/pizzasSlice";
import "./Pizzas.scss";

const Pizzas = () => {
  const { request } = useApi();
  const dispatch = useDispatch();
  const {pizzas} = useAppSelector(state => state.pizza);
  const pizzaRef: Ref = useRef([]);

  useEffect(() => {
    request("http://localhost:3001/pizzas")
    .then((res:any):void => {
      dispatch(fetchPizza(res));
    });
  }, []);

  type Ref = {
    current: any[]
  }

  
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
  
  const onPizzaClick = (i:number): void => {
    pizzaRef.current[i].focus()
  }
  console.log(pizzaRef.current)

  const pizzaItems = pizzas.map(el => {
    return <div tabIndex={1} key={el.id} onClick={() => onPizzaClick(el.id)} className="pizzas__item" ref={(element) => pizzaRef.current.push(element)}>
      <img src={el.imageUrl} className="pizzas__item_img"/>
      <div className="pizzas__item_title">{el.name}</div>

      <div className="pizzas__item_params">
        <div className="pizzas__item_params_doughs">
        <div className="pizzas__item_params_doughs_item">
        тонкое
        </div>
        <div className="pizzas__item_params_doughs_itemactive">
        традиционное
        </div>
        </div>
        <div className="pizzas__item_params_size">
          <button className="pizzas__item_params_size_item_active">{el.sizes[0]}</button>
          <button className="pizzas__item_params_size_item">{el.sizes[1]}</button>
          <button disabled={!el.sizes[2]? true : false} className="pizzas__item_params_size_item">{!el.sizes[2]? '40 p' : el.sizes[2]}</button>
        </div>
      </div>
      <div className="pizzas__item_manipulations">
    <div className="pizzas__item_manipulations_price">{el.price} p</div>
    <button className="pizzas__item_manipulations_btn">
    +  Добавить
    </button>
      </div>
    </div>
  })

  return (
    <div className="pizzas">
      {/* need to work on active classname styles  */}
      <div className="pizzas__btns">{buttons}</div>
      <h2 className="pizzas__title">Все пиццы</h2>
      <div className="pizzas__items">
        {pizzaItems}
      </div>
    </div>
  );
};

export default Pizzas;
