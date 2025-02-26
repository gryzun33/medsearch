import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpData } from '../../types/sign-up';
import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import BottomLink from '../../components/BottomLink';

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpData>();

  const onSubmit: SubmitHandler<SignUpData> = (data) => {
    console.log('Форма отправлена', data);
  };

  // shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md
  // max-w-2xl

  return (
    <div className="w-full xs:max-w-md md:max-w-2xl mx-auto p-6 bg-white xs:shadow-[0_0_10px_rgba(0,0,0,0.1)] xs:rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Sign up
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
          <div className="max-w-md w-full">
            <FormField
              label="Name"
              id="name"
              type="text"
              register={register}
              errors={errors.name}
              validationRules={{ required: 'Name is required' }}
            />
            <FormField
              label="Email"
              id="email"
              type="email"
              register={register}
              errors={errors.email}
              validationRules={{
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email format',
                },
              }}
            />
          </div>
          <div className="max-w-md w-full">
            <FormField
              label="Password"
              id="password"
              type="password"
              register={register}
              errors={errors.password}
              validationRules={{
                required: 'Password is required',
                minLength: { value: 6, message: 'Minimum of 6 characters' },
              }}
            />
            <FormField
              label="Confirm password"
              id="confirmPassword"
              type="password"
              register={register}
              errors={errors.confirmPassword}
              validationRules={{
                required: 'Confirm password',
                validate: (value: string) =>
                  value === watch('password') || 'Passwords don`t match',
              }}
            />
          </div>
        </div>

        <SubmitButton>Sign up</SubmitButton>
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
