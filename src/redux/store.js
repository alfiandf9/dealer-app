import { configureStore } from '@reduxjs/toolkit';
import dealerReducer from './dealerSlice';

export const store = configureStore({
  reducer: { dealer: dealerReducer },
});