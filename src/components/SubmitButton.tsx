import { Loader2 } from 'lucide-react';
import clsx from 'clsx';

type Props = {
  children: string;
  isLoading: boolean;
};

const SubmitButton = ({ children, isLoading }: Props) => {
  return (
    <button
      type="submit"
      className={clsx(
        'w-full h-[40px] flex justify-center items-center md:max-w-3xs mx-auto mt-3 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-hidden focus:bg-green-400  cursor-pointer',
        { 'opacity-70': isLoading }
      )}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin " />
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

export default SubmitButton;
