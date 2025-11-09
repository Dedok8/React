import { dreamsApi } from "@/entities";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [dreamsApi.reducerPath]: dreamsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      dreamsApi.middleware
    ),
});
