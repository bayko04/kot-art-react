import { configureStore } from "@reduxjs/toolkit";
import someReducer from "./reducers/someSlice";
import burgerReducer from "./reducers/BurgerSlice";
import searchReducer from "./reducers/useSearchStore";

export const store = configureStore({
  reducer: {
    some: someReducer,
    burger: burgerReducer,
    search: searchReducer,
  },
});
