import { createSlice } from "@reduxjs/toolkit";

const useAuthStore = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = useAuthStore.actions;
export default useAuthStore.reducer;
