// import { useSelector } from 'react-redux';
// import { RootState } from '../store/store';
import { Navigate } from 'react-router';
import { useGetProfileQuery } from '@/api/profileApiSlice';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { data: user, error } = useGetProfileQuery();

  if (error || !user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
