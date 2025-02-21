// import { NavLink } from 'react-router';
// import styles from './Header.module.css';
import HomeLink from './HomeLink';
import NavList from './NavList';

const Header = () => {
  return (
    <header className="bg-green-500 w-full shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center pt-6 pb-6 pl-4 pr-4">
        <HomeLink />
        <NavList />
      </div>
    </header>
  );
};

export default Header;
