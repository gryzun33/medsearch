import { Toaster } from '@/components/ui/sonner';
import Header from '../components/layouts/Header';
import { Outlet } from 'react-router';
import Footer from '@/components/layouts/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-4 lg:p-4 ">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
