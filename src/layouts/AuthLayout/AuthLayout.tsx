// import Sidebar from './Sidebar/Sidebar';
import styles from './AuthLayout.module.css';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <div>authlayout</div>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <main className={styles.content}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AuthLayout;
