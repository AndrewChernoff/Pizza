import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./cartStyle";

const initialState: CartState = {
  cart: [],
};

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      let addedItem = state.cart.find((el) => el.id === action.payload.id);
      if (addedItem) {
        addedItem.quantity++;
        addedItem.price = action.payload.price;
        addedItem.size = action.payload.size;
        addedItem.type = action.payload.type;
      } else {
        state.cart.push(action.payload);
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      let item = state.cart.find((el) => el.id === action.payload);
      item.quantity++;
    },
    decrement: (state, action: PayloadAction<number>) => {
      let item = state.cart.find((el) => el.id === action.payload);
      item.quantity--;
      if(item.quantity < 1) {
        item.quantity = 1
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(el => el.id !== action.payload)
    },
    clearCart: (state) => {
      state.cart.length = 0;
    }
  },
});

export const { addItem, increment, decrement, deleteItem, clearCart } = cart.actions;

export default cart.reducer;
