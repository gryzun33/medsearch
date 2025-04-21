import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

type Props = {
  children: React.ReactNode;
};

const RedirectRoute = ({ children }: Props) => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  if (isLogin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default RedirectRoute;
