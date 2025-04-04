import { useGetProfileQuery } from '@/api/profileApiSlice';
import { getErrorMessage } from '@/utils/getErrorMessage';

const Profile = () => {
  const { data: user, isLoading, error } = useGetProfileQuery();

  console.log('USER-PROFILE=', user);

  if (error) {
    return <div>{getErrorMessage(error)}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>Name: {user?.name}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
};

export default Profile;
