import { filterContacts } from 'redux/filter/filter.reducer';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();

  const onInputChange = event => {
    const filterData = event.currentTarget.value;
    dispatch(filterContacts(filterData));
  };

  return (
    <label className={css.label}>
      Find contact by name
      <input
        onChange={onInputChange}
        type="text"
        name="filter"
        placeholder="Contact name"
        pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
}
