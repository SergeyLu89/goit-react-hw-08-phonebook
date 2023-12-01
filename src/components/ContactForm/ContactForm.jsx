import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacThunk } from 'redux/contacts/contacts.reducer';
import { selectContacts } from 'redux/contacts/contacts.selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onAddContactForm = userData => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === userData.name.toLowerCase()
    );
    if (isExist) {
      alert(`${userData.name} is already in contacts`);
      return;
    }

    dispatch(addContacThunk(userData));
  };

  const onSubmitBtnClick = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const userData = {
      name,
      number,
      id: nanoid(),
    };
    onAddContactForm(userData);

    form.reset();
  };

  return (
    <form onSubmit={onSubmitBtnClick} className={css.loginForm}>
      <label>
        <p className={css.labelDescr}>Name</p>

        <input
          className={css.formInput}
          type="text"
          name="name"
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p className={css.labelDescr}>Number</p>

        <input
          className={css.formInput}
          type="tel"
          name="number"
          placeholder="Enter contact number"
          pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};
