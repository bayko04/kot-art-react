import { createSlice } from "@reduxjs/toolkit";

const usePopupsStore = createSlice({
  name: "popups",
  initialState: {
    isDelete: false,
    isDeleteUrl: "",
  },
  reducers: {
    setIsDelete: (state, action) => {
      state.isDelete = action.payload;
    },
    setIsDeleteUrl: (state, action) => {
      state.isDeleteUrl = action.payload;
    },
  },
});

export const { setIsDelete, setIsDeleteUrl } = usePopupsStore.actions;
export default usePopupsStore.reducer;
