import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const timestamp = Date.now();
const uniqueKey = `Shop_${timestamp}`;
const persistConfig = {
  key: "uniqueKey",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, shopSlice);

export const store = configureStore({
  reducer: { shop: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
