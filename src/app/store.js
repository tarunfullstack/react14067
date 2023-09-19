import { configureStore } from '@reduxjs/toolkit'
import {countriesApi} from "../services/countriesApi";
import { booksApi } from '../services/booksApi';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    
    [countriesApi.reducerPath]: countriesApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(countriesApi.middleware,booksApi.middleware),

})
setupListeners(store.dispatch)
