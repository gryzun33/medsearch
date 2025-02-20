import { NavLink } from 'react-router';

const NavList = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/login"
            className="flex items-center justify-center w-20 h-8 text-white border border-white rounded-sm hover:bg-green-400 transition duration-300 ease-in-out "
          >
            Sign in
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className="flex items-center justify-center w-20 h-8 text-white border border-white rounded-sm hover:bg-green-400 transition duration-300 ease-in-out "
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
