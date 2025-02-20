import { NavLink } from 'react-router';
import styles from './Header.module.css';
import HomeLink from '../HomeLink/HomeLink';

const Header = () => {
  return (
    <header className="bg-green-500 w-full">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center pt-6 pb-6 pl-4 pr-4">
        <HomeLink />
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
