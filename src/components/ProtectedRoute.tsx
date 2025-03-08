import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Navigate } from 'react-router';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
