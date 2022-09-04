import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
    filter: number
}

const initialState: FilterState = {
    filter: 0
}

const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      getFilter(state, action: PayloadAction<number>) {
        state.filter = action.payload
      }
    },
  })
  
  export const { getFilter } = filter.actions;
  
  export default filter.reducer;  //// export to store and then make filtration into component