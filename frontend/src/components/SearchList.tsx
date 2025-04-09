import { useSearchMedicinesQuery } from '@/api/medicineApiSlice';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Heart } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const SearchList = () => {
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
    console.log('null');
  }

  return (
    <div className="max-w-screen-lg mx-auto w-full">
      {!searchText && (
        <p className="text-gray-700">Please, enter a medication name</p>
      )}
      {!data.length && searchText && (
        <p className="text-gray-700">No medicines found for "{searchText}"</p>
      )}
      {data.length > 0 && searchText && (
        <>
          <p className="text-gray-700">Search results for "{searchText}"</p>
          <div className="w-full overflow-hidden rounded-sm shadow-sm mt-3">
            <div className="grid grid-cols-12 gap-4 bg-gray-100 p-3 text-sm text-gray-700">
              <div className="col-span-1"></div>
              <div className="col-span-5">Name</div>
              <div className="col-span-4">Form</div>
              <div className="col-span-2 text-end">Prices</div>
            </div>
            {data.map((medicine) => (
              <div className="grid grid-cols-12 gap-4 p-2 text-gray-700 items-center border-t-[1px] border-gray-200 hover:bg-green-50 transition-colors">
                <div className="col-span-1 flex justify-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="text-gray-300 hover:text-green-500 cursor-pointer transition-colors">
                          <Heart />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-500">
                        <p>Add to my medications</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="col-span-5">{medicine.name}</div>
                <div className="col-span-4 text-sm">
                  {`${medicine.type}, ${medicine.dosage}, ${medicine.volume}`}
                </div>
                <div className="col-span-2 text-end">
                  <div>{`${medicine.minPrice} ... ${medicine.maxPrice} $`}</div>
                  <div className="text-sm text-gray-500">
                    {medicine.pharmaciesCount} pharmacies
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchList;
