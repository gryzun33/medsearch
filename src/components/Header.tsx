// import { NavLink } from 'react-router';
// import styles from './Header.module.css';
import HomeLink from './HomeLink';
import NavList from './NavList';

const Header = () => {
  return (
    <header className="bg-green-500 w-full">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center pt-6 pb-6 pl-4 pr-4">
        <HomeLink />
        <NavList />
      </div>
    </header>
  );
};

export default Header;
