import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilter } from "../../redux/filter/filterSlice";
import PizzaItem from "../PizzaItem/PizzaItem";
import "./Pizzas.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useAppSelector } from "../../hooks/hooks";

type PizzaBlockProps = {
  pizzas: {
    id: number;
    name: string;
    imageUrl: string;
    sizes: number[];
    price: number;
  }[];
};

const Pizzas = (props: PizzaBlockProps) => {
  const dispatch = useDispatch();
  const stateFilter = useAppSelector(state => state.filter.filter); 

  const [activeFilter, setActiveFilter] = useState(stateFilter);

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
      <button
        onClick={() => {
          setActiveFilter(i);
          dispatch(getFilter(i));
        }}
        key={id}
        className={
          activeFilter === i ? "pizzas__btns_item_active" : "pizzas__btns_item"
        }
      >
        {name}
      </button>
    );
  });

  const pizzaItems = props.pizzas.map(
    ({ id, name, imageUrl, sizes, price }) => {
      return (
          <CSSTransition key={id} timeout={500} classNames="item">
            <PizzaItem key={id} params={{ id, name, imageUrl, sizes, price }} />
          </CSSTransition>
      );
    }
  );

  return (
    <div className="pizzas">
      <div className="pizzas__btns">{buttons}</div>
      <h2 className="pizzas__title">Все пиццы</h2>
      <TransitionGroup className='pizzas__items'>
        {pizzaItems}
      </TransitionGroup>

    </div>
  );
};

export default Pizzas;
