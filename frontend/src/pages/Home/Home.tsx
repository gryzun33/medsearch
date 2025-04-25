import { useGetPharmaciesQuery } from '@/api/pharmacyApiSlice';
import MapComponent from '@/components/shared/MapComponent';
import { setSearchText } from '@/store/slices/searchSlice';
import { POPULAR } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: pharmacies = [], error, isLoading } = useGetPharmaciesQuery();

  const handleMedicineClick = (medicine: string) => {
    console.log('Form submitted with data:', medicine);
    dispatch(setSearchText(medicine));
    navigate('/search');
  };
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center h-[calc(100vh-136px)] sm:h-[calc(100vh-96px)] lg:h-[calc(100vh-112px)]">
      <p className="text-gray-400 text-sm lg:text-base px-2">
        Most popular right now:{' '}
        {POPULAR.map((medicine, index) => (
          <span
            key={index}
            className="cursor-pointer text-gray-500"
            onClick={() => handleMedicineClick(medicine)}
          >
            {medicine}
            {index < POPULAR.length - 1 && ', '}
          </span>
        ))}
      </p>
      <div className="w-full text-center grow flex flex-col items-center justify-center mt-3">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 px-2">
          Welcome to MedSearch!
        </h1>
        <p className="lg:text-lg text-gray-600 px-2 mt-2">
          Explore the map below to discover nearby pharmacies!
        </p>
        <div className="w-full grow lg:rounded-lg lg:shadow-lg overflow-hidden mt-4">
          <MapComponent
            pharmacies={pharmacies}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
