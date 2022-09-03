import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import useApi from "../../hooks/useApi";
import { fetchPizza } from "../../redux/pizzas/pizzasSlice";
import PizzaItem from "../PizzaItem/PizzaItem";
import "./Pizzas.scss";

const Pizzas: React.FC = () => {
  const { request } = useApi();
  const dispatch = useDispatch();
  const { pizzas } = useAppSelector((state) => state.pizza);
  
  useEffect(() => {
    request("http://localhost:3001/pizzas").then((res: any): void => {
      dispatch(fetchPizza(res));
    });
  }, []);

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

  const pizzaItems = pizzas.map(
    ({ id, name, imageUrl, sizes, price }) => {
      return ( <PizzaItem key={id} params={{ id, name, imageUrl, sizes, price }} />
      );
    }
  );

  return (
    <div className="pizzas">
      {/* need to work on active classname styles  */}
      <div className="pizzas__btns">{buttons}</div>
      <h2 className="pizzas__title">Все пиццы</h2>
      <div className="pizzas__items">
        {" "}
        {pizzaItems}
      </div>
    </div>
  );
};  

export default Pizzas;
