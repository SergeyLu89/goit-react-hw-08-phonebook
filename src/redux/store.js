import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter.reducer';
import { contactsReducer } from './contacts/contacts.reducer';

export const store = configureStore({
  reducer: { contactsStore: contactsReducer, filterStore: filterReducer },
});
