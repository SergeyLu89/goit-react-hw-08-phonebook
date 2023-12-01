import React from 'react';
import css from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.reducer';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerThunk(formData));
  };

  return (
    <form onSubmit={onSubmit} className={css.loginForm}>
      <label>
        <p className={css.labelDescr}>Name:</p>
        <input
          className={css.formInput}
          type="text"
          placeholder="Taras Shevchenko"
          required
          name="userName"
        />
      </label>
      <label>
        <p className={css.labelDescr}>Email:</p>
        <input
          className={css.formInput}
          type="email"
          placeholder="myemail@mail.com"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p className={css.labelDescr}>Password:</p>
        <input
          className={css.formInput}
          type="password"
          placeholder="*******"
          required
          name="userPassword"
        />
      </label>
      <br />
      <button type="submit" className={css.formButton}>
        Sign Up
      </button>
    </form>
  );
};
