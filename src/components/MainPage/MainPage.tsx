import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import useApi from '../../hooks/useApi';
import { fetching, fetchPizza } from '../../redux/pizzas/pizzasSlice';
import Pizzas from '../Pizzas/Pizzas';
import './MainPage.scss';

const MainPage = () => {
  const { request } = useApi();
  const dispatch = useDispatch();
  const fetchingStatus = useAppSelector(state => state.pizza.fetching)

  const pizzas  = useAppSelector(
    state => {
      if(state.filter.filter === 0) {
        return state.pizza.pizzas;
      } else {
        return state.pizza.pizzas.filter(el => el.category === state.filter.filter);
      }
    }
    ); 
  const pizzasCheck = useAppSelector(state => state.pizza);

  useEffect(() => {
    console.log('effect')
    dispatch(fetching())
    request("http://localhost:3001/pizzas").then((res: any): void => {
      dispatch(fetchPizza(res));
    });
  }, []);

    return (<>
      {fetchingStatus === true ? <div>Loading...</div> : <Pizzas pizzas={pizzas} />} 
      </>
    );
  }

export default MainPage;
  