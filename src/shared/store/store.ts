import { configureStore } from "@reduxjs/toolkit";
import someReducer from "./reducers/someSlice";
import burgerReducer from "./reducers/BurgerSlice";
import searchReducer from "./reducers/useSearchStore";
import categoryReducer from "./reducers/useCategoryStore";
import paintingReducer from "./reducers/usePaintingStore";
import popupReducer from "./reducers/usePopupsStore";
import authReducer from "./reducers/useAuthStore";

export const store = configureStore({
  reducer: {
    some: someReducer,
    burger: burgerReducer,
    search: searchReducer,
    category: categoryReducer,
    painting: paintingReducer,
    popups: popupReducer,
    auth: authReducer,
  },
});
