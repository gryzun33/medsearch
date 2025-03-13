import { NavLink, useNavigate } from 'react-router';
import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../api/authApiSlice';
import { BriefcaseMedical } from 'lucide-react';
// import { useGetProfileQuery } from '@/api/profileApiSlice';
import { memo } from 'react';

const NavList = memo(() => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  // const { data: user /*  error */ } = useGetProfileQuery();
  const [logoutApi] = useLogoutMutation();
  const navigate = useNavigate();
  console.log('LOGIN NAVLIST');

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
      navigate('/');
    } catch (error) {
      console.error('Ошибка при логауте:', error);
    }
  };

  return (
    <nav>
      <ul className="flex gap-4 items-center">
        {isLogin ? (
          <>
            <li>
              <NavLink to="/profile">
                <BriefcaseMedical
                  strokeWidth={1.5}
                  className="size-9 text-white"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <UserCircleIcon className="size-9 text-white" />
              </NavLink>
            </li>
            <li className="flex items-center">
              <button onClick={handleLogout} className="cursor-pointer">
                <ArrowRightStartOnRectangleIcon className="size-9 text-white" />
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
});

export default NavList;
