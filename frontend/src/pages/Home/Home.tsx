import MapComponent from '@/components/MapComponent';
import { setSearchText } from '@/store/slices/searchSlice';
import { POPULAR } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMedicineClick = (medicine: string) => {
    console.log('Form submitted with data:', medicine);
    dispatch(setSearchText(medicine));
    navigate('/search');
  };
  return (
    <div className="flex flex-col items-center  bg-white min-h-[calc(100vh-70px)] sm:min-h-[calc(100vh-80px)]">
      <p className="text-gray-400">
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
      <div className="w-full text-center flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to MedSearch!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore the map below to discover nearby pharmacies!
        </p>
        <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
