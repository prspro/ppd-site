import { configureStore } from '@reduxjs/toolkit';
import ppdReducer from './slices/ppdSlice.js';

export const store = configureStore({
  reducer: {
    ppd: ppdReducer,
  },
});