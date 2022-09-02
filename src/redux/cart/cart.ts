import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./cartStyle";

const initialState: CartState = {
    cart: []
  };

  
  const cart = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
      addItem: (state, action: PayloadAction<CartItem>) => {
        let addedItem = state.cart.find((el) => el.id === action.payload.id);
        if(addedItem) {
          addedItem.quantity++;
        } else {
          state.cart.push(action.payload);  
        }
      }
    },
  });
  
  export const { addItem } = cart.actions;
  
  export default cart.reducer;