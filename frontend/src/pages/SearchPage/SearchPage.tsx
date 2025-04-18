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
    console.log('null');
  }

  return (
    <div className="max-w-screen-lg mx-auto w-full">
      {!searchText && (
        <p className="text-gray-700 px-4 lg:px-0 text-sm lg:text-base">
          Please, enter a medication name
        </p>
      )}
      {!data.length && searchText && (
        <p className="text-gray-700 px-4 lg:px-0 text-sm lg:text-base">
          No medicines found for "{searchText}"
        </p>
      )}
      {data.length > 0 && searchText && (
        <>
          <p className="text-gray-700 px-4 lg:px-0 text-sm lg:text-base">
            Search results for "{searchText}"
          </p>
          <div className="w-full overflow-hidden lg:rounded-sm shadow-sm mt-3">
            <div className="flex w-full justify-between bg-gray-100 p-2 md:pl-0 text-sm text-gray-700">
              <div className="hidden md:block md:w-1/12"></div>
              <div className="width-[65%] md:w-5/12 ">Name</div>
              <div className="hidden md:block md:w-4/12">Form</div>
              <div className="width-[35%] md:w-2/12 text-end">Prices</div>
            </div>
            <ul className="w-full">
              {data.map((medicine) => (
                <li
                  key={medicine.id}
                  className="flex flex-wrap w-full p-2 md:pl-0 text-gray-700 items-center border-t-[1px] border-gray-200 hover:bg-green-50 transition-colors"
                >
                  <div className="order-1 flex flex-col w-[65%] md:w-9/12 md:order-2 md:flex-row">
                    <div className="text-sm md:w-[55.5%] lg:text-base">
                      {medicine.name}
                    </div>
                    <div className="text-xs text-gray-500 md:w-[44.5%] lg:text-sm">
                      {`${medicine.type}, ${medicine.dosage}, ${medicine.volume}`}
                    </div>
                  </div>

                  <div className="order-2 w-[35%] text-end md:w-2/12 md:order-3">
                    <div className="text-sm lg:text-base">{`${medicine.minPrice} ... ${medicine.maxPrice} $`}</div>
                    <div className="text-xs text-gray-500 lg:text-sm">
                      {medicine.pharmaciesCount} pharmacies
                    </div>
                  </div>

                  <div className="order-3 w-full flex justify-end mt-2 md:w-1/12 md:order-1 md:justify-center md:mt-0 mt:items-center">
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
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
