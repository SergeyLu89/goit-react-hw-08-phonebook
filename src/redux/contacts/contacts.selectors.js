import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/fiter.selector';

export const selectContacts = state => state.contactsStore.contacts;
export const selectContactsIsLoading = state => state.contactsStore.isLoading;
export const selectContactsError = state => state.contactsStore.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
