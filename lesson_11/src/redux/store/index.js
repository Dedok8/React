import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import postReducer from "../slice/postSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    post: postReducer,
  },
});
