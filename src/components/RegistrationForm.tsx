import { SubmitHandler, useForm } from 'react-hook-form';
// import { Link } from 'react-router';
import SubmitButton from './SubmitButton';
import BottomLink from './BottomLink';
import { SignUpData } from '../types/sign-up';
import FormField from './FormField';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpData>();

  const onSubmit: SubmitHandler<SignUpData> = (data) => {
    console.log('Форма отправлена', data);
  };

  return (
    <div className="mx-w-md  mx-auto  p-6   bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Sign up
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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

export default RegistrationForm;
