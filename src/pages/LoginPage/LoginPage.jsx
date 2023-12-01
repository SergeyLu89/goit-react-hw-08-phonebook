import React from 'react';
import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
  };
  return (
    <div>
      <form onSubmit={onSubmit} className={css.loginForm}>
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
            minLength={6}
          />
        </label>

        <button type="submit" className={css.formButton}>
          Sign In
        </button>
      </form>
    </div>
  );
};
