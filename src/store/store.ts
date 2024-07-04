import { configureStore } from "@reduxjs/toolkit"
import someReducer from "./reducers/someSlice"

export const store = configureStore({
    reducer: {
        some: someReducer,
    },
})
