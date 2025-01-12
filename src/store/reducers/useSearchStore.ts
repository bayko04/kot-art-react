import { createSlice } from "@reduxjs/toolkit";

const useSearchStore = createSlice({
  name: "search",
  initialState: { searchModal: false },
  reducers: {
    setSearchModal: (state, action) => {
      state.searchModal = action.payload;
    },
  },
});

export const { setSearchModal } = useSearchStore.actions;
export default useSearchStore.reducer;
