// import Sidebar from './Sidebar/Sidebar';
// import styles from './AuthLayout.module.css';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
      <div>authlayout</div>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AuthLayout;
