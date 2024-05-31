import { configureStore } from "@reduxjs/toolkit";
 import {productsApi}  from "./feature/productsSlice";
import { cartReducer } from "./feature/cartSlice";

// Adding the api middleware enables caching, invalidation, polling,
// and other useful features of `rtk-query`

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [cartReducer.name]: cartReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState= ReturnType <typeof store.getState>;