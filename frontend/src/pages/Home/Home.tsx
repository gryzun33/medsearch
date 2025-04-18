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
    <div className="flex flex-col items-center lg:min-h-[calc(100vh-112px)]">
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
      <div className="w-full text-center flex-grow flex flex-col items-center justify-center mt-3 lg:mt-0">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 px-2">
          Welcome to MedSearch!
        </h1>
        <p className="lg:text-lg text-gray-600 px-2">
          Explore the map below to discover nearby pharmacies!
        </p>
        <div className="w-full h-[500px] lg:rounded-lg lg:shadow-lg overflow-hidden mt-4 lg:mt-8 border-t-[1px] border-gray-300 lg:border-0">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
