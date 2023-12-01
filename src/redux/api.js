import { isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6560581283aba11d99d0a573.mockapi.io';

export async function fetchContacts() {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return isRejectedWithValue(error);
  }
}

export async function fechDeleteContact(id) {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    return isRejectedWithValue(error);
  }
}

export async function addNewContact(contact) {
  try {
    const { data } = await axios.post('/contacts', contact, {
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  } catch (error) {
    return isRejectedWithValue(error);
  }
}
