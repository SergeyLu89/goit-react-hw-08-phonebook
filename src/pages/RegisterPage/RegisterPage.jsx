import React from 'react';
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
    console.log('Form Data', formData);
    dispatch(registerThunk(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Name:</p>
        <input
          type="text"
          placeholder="Taras Shevchenko"
          required
          name="userName"
        />
      </label>
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
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};
