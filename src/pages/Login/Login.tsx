import { SubmitHandler, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import BottomLink from '../../components/BottomLink';
import { SignInData } from '../../types/user';
import { useLoginMutation } from '../../api/authApiSlice';
import { useNavigate } from 'react-router';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { AlertDestructive } from '@/components/ui/AlertDestructive';

const zodSchema: ZodType<SignInData> = z.object({
  email: z.string().nonempty('Field is required').email('Invalid email format'),
  password: z
    .string()
    .nonempty('Field is required')
    .min(6, 'Minimum of 6 characters'),
});

const Login = () => {
  const navigate = useNavigate();

  const [signin, { isLoading: isLoginLoading, error: signinError }] =
    useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(zodSchema),
  });

  const onSubmit: SubmitHandler<SignInData> = async (data) => {
    console.log('Форма логин отправлена', data);

    try {
      await signin({ email: data.email, password: data.password }).unwrap();
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="w-full xs:max-w-md mx-auto p-6 bg-white xs:shadow-[0_0_10px_rgba(0,0,0,0.1)] xs:rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Sign in
      </h2>
      {!isLoginLoading && signinError && (
        <AlertDestructive message={getErrorMessage(signinError)} />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <FormField
            label="Email"
            id="email"
            type="email"
            register={register}
            errors={errors.email}
          />

          <FormField
            label="Password"
            id="password"
            type="password"
            register={register}
            errors={errors.password}
          />
        </div>

        <SubmitButton isLoading={isLoginLoading}>Sign in</SubmitButton>
      </form>
      <BottomLink
        text="Don't have an account?"
        linkText="Sign up"
        linkTo="/register"
      />
    </div>
  );
};

export default Login;
