import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={css.register}>
        Register
      </NavLink>
      <NavLink className={css.login} to="/login">
        Log In{' '}
      </NavLink>
    </div>
  );
};
