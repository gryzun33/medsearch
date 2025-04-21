import { NavLink } from 'react-router';
import logo from '/src/assets/pharmacy-icon.svg';

const HomeLink = () => {
  return (
    <NavLink to="/">
      <div className="flex items-center">
        <div className="w-8">
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <span className="font-rubik text-xl text-white ml-1">MedSearch</span>
      </div>
    </NavLink>
  );
};

export default HomeLink;
