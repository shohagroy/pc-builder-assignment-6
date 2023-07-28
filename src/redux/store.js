// import { apiSlice } from "@/features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./features/query/querySlice";

export const store = configureStore({
  reducer: {
    query: queryReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //   middleware: (getDefaultMiddlewares) =>
  //     getDefaultMiddlewares().concat(apiSlice.middleware),
});
