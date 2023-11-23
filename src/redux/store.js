import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
import { getProductReducer } from "./reducer/productReducer";
import { getProductDetailReducer } from "./reducer/productReducer";
import { getProductCart } from "./reducer/cartReducer";
import thunk from "redux-thunk";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  const persistConfig = {
    key: 'root',
    storage,
  }
  const productReducer = combineReducers({
      state:getProductReducer,
      productDetail:getProductDetailReducer,
      cart:getProductCart
  })

  const persistedProductReducer = persistReducer(persistConfig,productReducer)

  export const store = configureStore({
    reducer: {
      product:persistedProductReducer,
    }, 

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
        },
      }).concat(thunk), 
    

    })

export const  persistor = persistStore(store);