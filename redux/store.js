import { configureStore } from "@reduxjs/toolkit";
import hospitalSlice from "./hospitalSlice";

export const store = configureStore({
  reducer: {
    hospitals: hospitalSlice,
  },
});
