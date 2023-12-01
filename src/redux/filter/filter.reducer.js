import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',

  initialState: initialFilterState,

  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
