import { useSearchMedicinesQuery } from '@/api/medicineApiSlice';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

import SearchList from '@/components/SearchList';
import SearchTableHeader from '@/components/SearchTableHeader';

const SearchPage = () => {
  const searchText = useSelector((state: RootState) => state.search.searchText);

  const { data = [], isError } = useSearchMedicinesQuery(searchText, {
    skip: !searchText,
  });

  if (isError) {
    console.log('ERROR');
  }

  if (data) {
    console.log('data=', data);
  }

  if (!data) {
    console.log('data3=', data);
  }

  let message: string | null = null;

  if (!searchText) {
    message = 'Please, enter a medication name';
  } else if (isError) {
    message = 'Something went wrong. Please try again later.';
  } else if (searchText && !data) {
    message = `No medicines found for "${searchText}"`;
  } else if (searchText && data) {
    message = `Search results for "${searchText}"`;
  }

  return (
    <div className="max-w-screen-lg mx-auto w-full">
      {message && (
        <p className="text-gray-700 px-4 lg:px-0 text-sm lg:text-base">
          {message}
        </p>
      )}

      {data && searchText && (
        <div className="w-full overflow-hidden lg:rounded-sm shadow-sm mt-3">
          <SearchTableHeader />
          <SearchList medicines={data} />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
