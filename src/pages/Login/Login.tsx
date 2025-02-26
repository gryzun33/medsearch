import { SubmitHandler, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import BottomLink from '../../components/BottomLink';
import { SignInData } from '../../types/sign-up';

const zodSchema: ZodType<SignInData> = z.object({
  email: z.string().nonempty('Field is required').email('Invalid email format'),
  password: z
    .string()
    .nonempty('Field is required')
    .min(6, 'Minimum of 6 characters'),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(zodSchema),
  });

  const onSubmit: SubmitHandler<SignInData> = (data) => {
    console.log('Форма логин отправлена', data);
  };

  return (
    <div className="w-full xs:max-w-md mx-auto p-6 bg-white xs:shadow-[0_0_10px_rgba(0,0,0,0.1)] xs:rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Sign in
      </h2>
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

        <SubmitButton>Sign in</SubmitButton>
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
