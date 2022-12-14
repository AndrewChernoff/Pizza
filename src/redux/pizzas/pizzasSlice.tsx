import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PizzasAction,
  PizzasState,
} from "./pizzasStyle";

const initialState: PizzasState = {
  pizzas: [],
  cart: [],
  fetching: false,
  error: false,
};

const pizzas = createSlice({
  name: "pizzas",
  initialState: initialState,
  reducers: {
    fetching: (state) => {
      state.fetching = true;
    },
    fetchPizza: (state, action: PayloadAction<PizzasAction[]>) => {
      state.fetching = false;
      state.pizzas = action.payload;
    },
    error: (state) => {
      state.error = true;
    },
  },
});

export const { fetching, fetchPizza, error } = pizzas.actions;

export default pizzas.reducer;
