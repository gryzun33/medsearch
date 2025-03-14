import MapComponent from '@/components/MapComponent';
import { Toaster } from '@/components/ui/sonner';
import { hideToast } from '@/store/slices/toastSlice';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const Home = () => {
  const dispatch = useDispatch();
  const { showToast, message } = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    if (showToast) {
      console.log('TOAST');
      toast.success(message, {
        duration: 3000,
        style: {
          background: '#D1F7D1',
          color: '#006400',
        },
      });

      setTimeout(() => {
        dispatch(hideToast());
      }, 3000);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 min-h-[calc(100vh-70px)] sm:min-h-[calc(100vh-80px)]">
      <div className="w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to MedSearch!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore the map below to discover nearby pharmacies!
        </p>
        <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
          <MapComponent />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
