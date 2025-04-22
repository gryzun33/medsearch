import { useGetMedicineWithPharmaciesQuery } from '@/api/medicineApiSlice';
import PharmaciesTableHeader from '@/components/pages/Pharmacies/PharmaciesTableHeader';
import PharmacyList from '@/components/pages/Pharmacies/PharmacyList';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useParams } from 'react-router';

const Pharmacies = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMedicineWithPharmaciesQuery(
    id ?? skipToken
  );

  if (!id) return <p>Invalid medicine</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading pharmacies.</p>;
  if (!data) return <p>No data found.</p>;
  if (!data.pharmacies.length)
    return <p>No pharmacies available for this medicine.</p>;

  return (
    <div className="max-w-screen-lg mx-auto w-full">
      <p className="text-gray-700 px-2 text-sm font-semibold lg:text-base">{`${data.name}, ${data.type}, ${data.dosage}, ${data.volume}`}</p>

      <div className="w-full overflow-hidden lg:rounded-sm shadow-sm mt-3">
        <PharmaciesTableHeader />
        <PharmacyList pharmacies={data.pharmacies} />
      </div>
    </div>
  );
};

export default Pharmacies;
