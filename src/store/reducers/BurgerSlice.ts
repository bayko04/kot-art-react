import { createSlice } from "@reduxjs/toolkit";

const BurgerSlice = createSlice({
  name: "burger",
  initialState: {
    burger: false,
  },
  reducers: {
    setBurger: (state) => {
      state.burger = !state.burger;
    },
  },
});

export const { setBurger } = BurgerSlice.actions;
export default BurgerSlice.reducer;
