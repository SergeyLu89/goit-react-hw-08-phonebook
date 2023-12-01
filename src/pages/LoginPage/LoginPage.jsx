import React from 'react';
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
      <form onSubmit={onSubmit}>
        <label>
          <p>Email:</p>
          <input
            type="email"
            placeholder="myemail@mail.com"
            required
            name="userEmail"
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            placeholder="*******"
            required
            name="userPassword"
            minLength={6}
          />
        </label>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
