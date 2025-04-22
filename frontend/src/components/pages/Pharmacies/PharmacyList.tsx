import PharmacyItem from './PharmacyItem';
import { Stock } from '@/types/stock';
import { Pharmacy } from '@/types/pharmacy';

type Props = {
  pharmacies: (Stock & {
    pharmacy: Pharmacy;
  })[];
};

const PharmacyList = ({ pharmacies }: Props) => {
  return (
    <ul className="w-full">
      {pharmacies.map((pharmacyData) => (
        <PharmacyItem
          key={pharmacyData.pharmacyId}
          pharmacyData={pharmacyData}
        />
      ))}
    </ul>
  );
};

export default PharmacyList;
