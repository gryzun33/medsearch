// import Sidebar from './Sidebar/Sidebar';
// import styles from './AuthLayout.module.css';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="xs:py-10">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
