import {
  UseFormRegister,
  FieldValues,
  FieldError,
  Path,
} from 'react-hook-form';

type FormFieldProps<T extends FieldValues> = {
  label: string;
  id: Path<T>;
  type: string;
  register: UseFormRegister<T>;
  errors: FieldError | undefined;
};

const FormField = <T extends FieldValues>({
  label,
  id,
  type,
  register,
  errors,
}: FormFieldProps<T>) => {
  return (
    <div className="mb-7 relative">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={String(id)}
      >
        {label}
      </label>
      <input
        type={type}
        id={String(id)}
        {...register(id)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      {errors && errors.message && (
        <p className="absolute top-[100%] text-red-500 text-sm font-light">
          {errors.message}
        </p>
      )}
    </div>
  );
};

export default FormField;
