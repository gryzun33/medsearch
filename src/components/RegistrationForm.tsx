import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Форма отправлена', data);
  };

  return (
    <div className="max-w-md mx-auto  p-6 my-10  bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Sign up
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-hidden focus:ring-2 focus:ring-green-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm font-light">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email format',
              },
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm font-light">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Minimum of 6 characters' },
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm font-light">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="confirmPassword"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Confirm password',
              validate: (value) =>
                value === watch('password') || 'Passwords don`t match',
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-hidden focus:ring-2 focus:ring-green-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm font-light">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-hidden focus:bg-green-400  cursor-pointer"
        >
          Sign up
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-green-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
