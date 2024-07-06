import { configureStore } from "@reduxjs/toolkit";
import someReducer from "./reducers/someSlice";
import burgerReducer from "./reducers/BurgerSlice";

export const store = configureStore({
  reducer: {
    some: someReducer,
    burger: burgerReducer,
  },
});
