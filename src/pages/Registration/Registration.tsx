import { SubmitHandler, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import BottomLink from '../../components/BottomLink';
import { SignUpData } from '../../types/user';
import { useLoginMutation, useSignupMutation } from '../../api/authApiSlice';
import { useNavigate } from 'react-router';
import { AlertDestructive } from '@/components/ui/AlertDestructive';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { useDispatch } from 'react-redux';
import { showToast } from '@/store/slices/toastSlice';

const zodSchema: ZodType<SignUpData> = z
  .object({
    name: z.string().nonempty('Field is required'),
    email: z
      .string()
      .nonempty('Field is required')
      .email('Invalid email format'),
    password: z
      .string()
      .nonempty('Field is required')
      .min(6, 'Minimum of 6 characters'),
    confirmPassword: z
      .string()
      .nonempty('Field is required')
      .min(6, 'Minimum of 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords don`t match',
    path: ['confirmPassword'],
  });

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [signup, { isError, error }] = useSignupMutation();
  const [signup, { isLoading: isSignupLoading, error: signupError }] =
    useSignupMutation();
  const [signin, { isLoading: isLoginLoading, error: signinError }] =
    useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(zodSchema),
  });

  const onSubmit: SubmitHandler<SignUpData> = async (data) => {
    console.log('Форма отправлена', data);
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      await signup(body).unwrap();
      await signin({ email: data.email, password: data.password }).unwrap();
      dispatch(showToast('You have successfully registered!'));
      navigate('/');
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  const error = signupError || signinError;

  return (
    <div className="w-full xs:max-w-md md:max-w-2xl mx-auto p-6 bg-white xs:shadow-[0_0_10px_rgba(0,0,0,0.1)] xs:rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Sign up
      </h2>
      {error && <AlertDestructive message={getErrorMessage(error)} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
          <div className="max-w-md w-full">
            <FormField
              label="Name"
              id="name"
              type="text"
              register={register}
              errors={errors.name}
            />
            <FormField
              label="Email"
              id="email"
              type="email"
              register={register}
              errors={errors.email}
            />
          </div>
          <div className="max-w-md w-full">
            <FormField
              label="Password"
              id="password"
              type="password"
              register={register}
              errors={errors.password}
            />
            <FormField
              label="Confirm password"
              id="confirmPassword"
              type="password"
              register={register}
              errors={errors.confirmPassword}
            />
          </div>
        </div>
        <SubmitButton isLoading={isLoginLoading || isSignupLoading}>
          Sign up
        </SubmitButton>
      </form>
      <BottomLink
        text="Already have an account?"
        linkText="Sign in"
        linkTo="/login"
      />
    </div>
  );
};

export default Registration;
