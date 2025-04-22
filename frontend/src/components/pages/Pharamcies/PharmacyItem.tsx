import { Heart } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const PharmacyItem = () => {
  return (
    <li className="flex w-full p-2  text-gray-700 items-center border-t-[1px] border-gray-200 hover:bg-green-50 transition-colors">
      <div className="flex flex-col w-[70%] md:w-10/12 md:order-2 md:flex-row">
        <div className="text-sm md:w-1/2 lg:text-base">PharmacyName</div>
        <div className="text-xs text-gray-500 md:w-1/2 lg:text-sm">
          Pharmacy address + time
        </div>
      </div>

      <div className="w-[30%] text-end md:w-2/12 md:order-3">
        <div className="text-sm lg:text-base">Price</div>
        <div className="text-xs text-gray-500 lg:text-sm">count</div>
      </div>
    </li>
  );
};

export default PharmacyItem;
