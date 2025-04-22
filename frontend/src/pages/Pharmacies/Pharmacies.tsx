import PharmaciesTableHeader from '@/components/pages/Pharamcies/PharmaciesTableHeader';
import PharmacyList from '@/components/pages/Pharamcies/PharmacyList';

const Pharmacies = () => {
  return (
    <div className="max-w-screen-lg mx-auto w-full">
      <p className="text-gray-700 px-2 text-sm lg:text-base">Medicine</p>

      <div className="w-full overflow-hidden lg:rounded-sm shadow-sm mt-3">
        <PharmaciesTableHeader />
        <PharmacyList />
      </div>
    </div>
  );
};

export default Pharmacies;
