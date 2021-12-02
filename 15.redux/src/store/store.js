import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
