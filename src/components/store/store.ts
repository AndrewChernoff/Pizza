import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cart from '../../redux/cart/cart'
import pizzas from '../../redux/pizzas/pizzasSlice'


const store = configureStore({
  reducer: {
    pizza: pizzas,
    cart: cart
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


export default store
