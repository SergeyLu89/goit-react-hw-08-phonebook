import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/contacts.reducer';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/contacts.selectors';

export const ContactsPage = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};
