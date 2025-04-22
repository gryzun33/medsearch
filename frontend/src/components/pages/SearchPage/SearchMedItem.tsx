import { Heart } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { MedicineSearchResponse } from '@/types/medicine';
import { Link } from 'react-router';

type Props = {
  medicine: MedicineSearchResponse;
};

const SearchMedItem = ({ medicine }: Props) => {
  return (
    <li className="w-full">
      <Link
        to={`/medicine/${medicine.id}/pharmacies`}
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
      </Link>
    </li>
  );
};

export default SearchMedItem;
