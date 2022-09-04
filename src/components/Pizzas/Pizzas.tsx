import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import useApi from "../../hooks/useApi";
import { getFilter } from "../../redux/filter/filterSlice";
import { fetchPizza } from "../../redux/pizzas/pizzasSlice";
import PizzaItem from "../PizzaItem/PizzaItem";
import "./Pizzas.scss";

const Pizzas: React.FC = () => {
  const { request } = useApi();
  const dispatch = useDispatch();
  const pizzas  = useAppSelector(
    state => {
      if(state.filter.filter === 0) {
        return state.pizza.pizzas;
      } else {
        return state.pizza.pizzas.filter(el => el.category === state.filter.filter);
      }
    }
    );
    
  const [activeFilter, setActiveFilter] = useState(0);
  
  useEffect(() => {
    console.log('effect')
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

  const buttons = buttonsData.map(({ name, id }, i) => {
    return (
      <button onClick={() => {
        setActiveFilter(i)
        dispatch(getFilter(i))
        }} key={id} className={activeFilter === i? "pizzas__btns_item_active" : "pizzas__btns_item"}>
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
