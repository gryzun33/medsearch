// import { Outlet } from 'react-router-dom';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import Sidebar from './Sidebar/Sidebar';
import Header from '../components/Header';
// import styles from './MainLayout.module.css';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
