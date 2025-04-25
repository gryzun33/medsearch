import { Pharmacy } from '@/types/pharmacy';

type Props = {
  pharmacy: Pharmacy & { price?: number; quantity?: number };
};

const PharmacyItem = ({ pharmacy }: Props) => {
  return (
    <li className="flex w-full p-2  text-gray-700 items-center border-t-[1px] border-gray-200 hover:bg-green-50 transition-colors">
      <div className="flex flex-col w-[70%] md:w-10/12 md:order-2 md:flex-row">
        <div className="text-sm md:w-1/2 lg:text-base">{pharmacy.name}</div>
        <div className="text-xs text-gray-500 md:w-1/2 lg:text-sm flex flex-col">
          <span>{pharmacy.address}</span>
          <span>{pharmacy.hours}</span>
        </div>
      </div>

      <div className="w-[30%] text-end md:w-2/12 md:order-3">
        <div className="text-sm lg:text-base">{`${pharmacy.price} $`}</div>
        <div className="text-xs text-gray-500 lg:text-sm">{`${pharmacy.quantity} packs`}</div>
      </div>
    </li>
  );
};

export default PharmacyItem;
