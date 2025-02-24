import { createSlice } from "@reduxjs/toolkit";

const usePaintingStore = createSlice({
  name: "painting",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = usePaintingStore.actions;
export default usePaintingStore.reducer;
