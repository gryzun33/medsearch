import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSearchMedicinesQuery } from '@/api/medicineApiSlice';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setSearchText } from '@/store/slices/searchSlice';

type FormData = {
  searchText: string;
};

const MedicineSearch = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.search.searchText);

  const { register, handleSubmit, reset } = useForm<FormData>();

  const { data, isError } = useSearchMedicinesQuery(searchText, {
    skip: !searchText,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form submitted with data:', data);
    dispatch(setSearchText(data.searchText));
    reset();
  };

  console.log('rendersearch');

  if (isError) {
    console.log('ERROR');
  }

  if (data) {
    console.log('data=', data);
  }

  if (!data) {
    console.log('null');
  }

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
