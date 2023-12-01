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
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {authenticated ? (
              <>
                <li>
                  <NavLink to="/contacts">Contacts</NavLink>
                </li>
                <span>Hello {userData.name}!</span>
                <button type="button" onClick={onLogOutBtn}>
                  Log Out
                </button>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
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
