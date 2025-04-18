import { MedicineSearchResponse } from '@/types/medicine';
import SearchMedItem from './SearchMedItem';

type Props = {
  medicines: MedicineSearchResponse[];
};

const SearchList = ({ medicines }: Props) => {
  return (
    <ul className="w-full">
      {medicines.map((medicine) => (
        <SearchMedItem key={medicine.id} medicine={medicine} />
      ))}
    </ul>
  );
};

export default SearchList;
