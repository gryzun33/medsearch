import PharmacyItem from './PharmacyItem';
import { Pharmacy } from '@/types/pharmacy';

type Props = {
  pharmacies: (Pharmacy & { price?: number; quantity?: number })[];
};

const PharmacyList = ({ pharmacies }: Props) => {
  return (
    <ul className="w-full">
      {pharmacies.map((pharmacy) => (
        <PharmacyItem key={pharmacy.id} pharmacy={pharmacy} />
      ))}
    </ul>
  );
};

export default PharmacyList;
