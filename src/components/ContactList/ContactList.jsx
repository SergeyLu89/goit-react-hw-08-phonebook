import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import {
  createFetchContacts,
  deleteContact,
} from 'redux/contacts/contacts.reducer';
import { selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createFetchContacts());
  }, [dispatch]);

  const onDeleteBtnClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.contactsListItem} key={contact.id}>
            <p className={css.listItemTextcontent}>
              {contact.name}: {contact.number}{' '}
            </p>

            <button
              type="button"
              onClick={() => {
                onDeleteBtnClick(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
