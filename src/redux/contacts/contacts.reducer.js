import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewContact, fechDeleteContact, fetchContacts } from 'redux/api';

export const createFetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWidthValue }) => {
    try {
      const contact = await fetchContacts();
      return contact;
    } catch (err) {
      return rejectWidthValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWidthValue }) => {
    try {
      const contact = await fechDeleteContact(id);
      return contact;
    } catch (err) {
      return rejectWidthValue(err);
    }
  }
);

export const newContact = createAsyncThunk(
  'contacts/newContact',
  async (Param, { rejectWidthValue }) => {
    try {
      const contact = await addNewContact(Param);
      return contact;
    } catch (err) {
      return rejectWidthValue(err);
    }
  }
);

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contact',

  initialState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createFetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(createFetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
        state.error = null;
      })
      .addCase(createFetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          el => el.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(newContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
