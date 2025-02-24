import { createSlice } from "@reduxjs/toolkit";

const useCategoryStore = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = useCategoryStore.actions;
export default useCategoryStore.reducer;
