import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setSearchText } from '@/store/slices/searchSlice';
import { useNavigate } from 'react-router';

type FormData = {
  searchText: string;
};

const MedicineSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form submitted with data:', data);
    dispatch(setSearchText(data.searchText));
    reset();
    navigate('/search');
  };

  return (
    <div className="w-full order-last sm:order-none sm:flex-grow lg:max-w-lg sm:px-6">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
        <Input
          type="text"
          placeholder="Search for medicines..."
          className="bg-white text-slate-700 focus-visible:ring-green-400 border-none text-sm "
          {...register('searchText')}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 bottom-0 px-3 py-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default MedicineSearch;
