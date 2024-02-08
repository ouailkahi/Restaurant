// store.js

import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';
import repasSlice from './repasSlice';

export const store = configureStore({
  reducer: {
    contact: contactSlice,
    repas: repasSlice
  },
});
