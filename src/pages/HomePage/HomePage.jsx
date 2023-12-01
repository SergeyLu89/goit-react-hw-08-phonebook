import React from 'react';
import css from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div>
      <h1 className={css.homePageTitle}>
        Welcome to the{' '}
        <span className={css.homePageTitleAccent}>phone book</span>{' '}
      </h1>
      <h3>
        It is a reliable assistant in everyday life. <br /> Manage your network
        of contacts to always be in touch with people important to you.
      </h3>
    </div>
  );
};
