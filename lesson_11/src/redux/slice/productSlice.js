import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/api/productsApi";

const initialState = {
  original: products,
  sorted: products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.original = [...state.original, action.payload];
      state.sorted = [...state.sorted, action.payload];
    },
    searchFilter: (state, action) => {
      const searchEl = action.payload.toLowerCase();
      state.sorted = searchEl
        ? state.original.filter((product) =>
            product.toLowerCase().includes(searchEl)
          )
        : state.original;
    },
  },
});

export const { addProduct, searchFilter } = productSlice.actions;

export default productSlice.reducer;
