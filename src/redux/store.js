import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
