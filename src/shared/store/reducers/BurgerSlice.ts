import { createSlice } from "@reduxjs/toolkit";

const BurgerSlice = createSlice({
  name: "burger",
  initialState: {
    burger: false,
  },
  reducers: {
    setBurger: (state, action) => {
      state.burger = action.payload;
    },
  },
});

export const { setBurger } = BurgerSlice.actions;
export default BurgerSlice.reducer;
