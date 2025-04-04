// import { NavLink } from 'react-router';
// import styles from './Header.module.css';
import HomeLink from './HomeLink';
import NavList from './NavList';

const Header = () => {
  return (
    <header className="bg-green-500 w-full shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center pt-4 pb-4 pl-2 pr-2 h-[70px] sm:pt-5 sm:pb-5 sm:pl-4 sm:pr-4 sm:h-[80px]">
        <HomeLink />
        <NavList />
      </div>
    </header>
  );
};

export default Header;
