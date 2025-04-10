import { Toaster } from '@/components/ui/sonner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
