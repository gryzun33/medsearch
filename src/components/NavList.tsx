import { NavLink } from 'react-router';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

const NavList = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li className="md:hidden">
          <NavLink to="/login">
            <ArrowRightEndOnRectangleIcon className="size-9 text-white" />
          </NavLink>
        </li>
        <li className="hidden md:list-item">
          <NavLink
            to="/login"
            className="md:flex items-center justify-center w-20 h-8 text-white border border-white rounded-sm hover:bg-green-400 transition-colors "
          >
            Sign in
          </NavLink>
        </li>
        <li className="hidden md:list-item">
          <NavLink
            to="/register"
            className="md:flex items-center justify-center w-20 h-8 text-white border border-white rounded-sm hover:bg-green-400 transition-colors "
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
