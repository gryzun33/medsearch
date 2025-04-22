import { MedicineSearchResponse } from '@/types/medicine';
import PharmacyItem from './PharmacyItem';

const PharmacyList = () => {
  const pharmacies = [1, 2, 3, 4, 5];

  return (
    <ul className="w-full">
      {pharmacies.map((_, ind) => (
        <PharmacyItem key={ind} />
      ))}
    </ul>
  );
};

export default PharmacyList;
