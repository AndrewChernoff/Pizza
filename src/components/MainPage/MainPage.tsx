import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import useApi from '../../hooks/useApi';
import { error, fetching, fetchPizza } from '../../redux/pizzas/pizzasSlice';
import Error from '../Error/Error';
import LoadingItems from '../LoadingItems/LoadingItems';
import Pizzas from '../Pizzas/Pizzas';
import './MainPage.scss';

const MainPage = () => {
  const { request } = useApi();
  const dispatch = useDispatch();
  const fetchingStatus = useAppSelector(state => state.pizza.fetching)
  const errorSatus = useAppSelector(state => state.pizza.error)

  const pizzas  = useAppSelector(
    state => {
      if(state.filter.filter === 0) {
        return state.pizza.pizzas;
      } else {
        return state.pizza.pizzas.filter(el => el.category === state.filter.filter);
      }
    }
    ); 

  useEffect(() => {
    dispatch(fetching())
    request("https://react-tsx-pizza-shop.herokuapp.com/api/pizzas")
    .then((res: any): void => {
      dispatch(fetchPizza(res));
    })
    .catch((e) => dispatch(error))
  }, []);

    return (<>
      {fetchingStatus === true ? 
      <LoadingItems/> 
      : <Pizzas pizzas={pizzas} />} 
      {errorSatus? <Error/> : null}

      </>
    );
  }

export default MainPage;
  