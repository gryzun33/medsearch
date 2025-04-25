import { useGetMedicineWithPharmaciesQuery } from '@/api/medicineApiSlice';
import PharmaciesTableHeader from '@/components/pages/Pharmacies/PharmaciesTableHeader';
import PharmaciesViewToggle from '@/components/pages/Pharmacies/PharmaciesViewToggle';
import PharmacyList from '@/components/pages/Pharmacies/PharmacyList';
import { PriceSortSelect } from '@/components/pages/Pharmacies/PriceSortSelect';
import MapComponent from '@/components/shared/MapComponent';
import { RootState } from '@/store/store';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Pharmacies = () => {
  const { id } = useParams();
  const sortOrder = useSelector(
    (state: RootState) => state.pharmaciesView.priceOrder
  );
  const pharmaciesView = useSelector(
    (state: RootState) => state.pharmaciesView.pharmaciesView
  );
  const { data, isLoading, error } = useGetMedicineWithPharmaciesQuery(
    id ? { id, order: sortOrder } : skipToken
  );

  if (!id) return <p>Invalid medicine</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading pharmacies.</p>;
  if (!data) return <p>No data found.</p>;
  if (!data.pharmacies.length) {
    return <p>No pharmacies available for this medicine.</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto w-full">
      <div className="flex justify-between items-center px-2 gap-4">
        <p className="text-gray-700 text-sm font-semibold lg:text-base flex flex-wrap gap-x-1">
          <span>{data.name},</span>
          <span>{data.type},</span>
          <span>{data.dosage},</span>
          <span>{data.volume}</span>
        </p>
        <div className="flex gap-2">
          <PriceSortSelect view={pharmaciesView} />
          <PharmaciesViewToggle view={pharmaciesView} />
        </div>
      </div>

      <div className="w-full overflow-hidden lg:rounded-sm shadow-sm mt-3">
        {pharmaciesView === 'list' && (
          <>
            <PharmaciesTableHeader />
            <PharmacyList pharmacies={data.pharmacies} />
          </>
        )}

        {pharmaciesView === 'map' && (
          <div className="w-full grow lg:rounded-lg lg:shadow-lg overflow-hidden h-[470px]">
            <MapComponent pharmacies={data.pharmacies} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pharmacies;
