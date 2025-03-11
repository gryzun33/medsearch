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
    <>
      <div>Home</div>
      <Toaster />
    </>
  );
};

export default Home;
