// import { useSelector } from 'react-redux';
// import { RootState } from '../store/store';
import { Navigate } from 'react-router';
import { useGetProfileQuery } from '@/api/profileApiSlice';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { data: user, isLoading, error } = useGetProfileQuery();

  console.log('user Protected=', user);

  if (isLoading) {
    return <div>Loading...</div>; // Или любой другой индикатор загрузки
  }

  if (error || !user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
