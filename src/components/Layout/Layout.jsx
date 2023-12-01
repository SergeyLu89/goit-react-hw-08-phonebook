import css from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/auth.reducer';
import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selectors';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  const onLogOutBtn = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className={css.section}>
      <header className={css.header}>
        <nav>
          <ul className={css.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
              >
                Home
              </NavLink>
            </li>
            {authenticated ? (
              <>
                <li>
                  <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                  >
                    Contacts
                  </NavLink>
                </li>
                <span className={css.navDescr}>Hello {userData.name} !</span>
                <button
                  type="button"
                  className={css.formButton}
                  onClick={onLogOutBtn}
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>{' '}
      </header>
      <main>{children}</main>
    </div>
  );
};
