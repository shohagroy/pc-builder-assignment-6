// import { apiSlice } from "@/features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./features/query/querySlice";
import pcBuildReducer from "./features/pc_build/pcBuildSlice";

export const store = configureStore({
  reducer: {
    query: queryReducer,
    pcBuild: pcBuildReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //   middleware: (getDefaultMiddlewares) =>
  //     getDefaultMiddlewares().concat(apiSlice.middleware),
});
