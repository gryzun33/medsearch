import { useParams } from 'react-router';

const Pharmacy = () => {
  const { id } = useParams();
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <div className="w-full p-6 shadow-sm flex flex-col bg-green-50">
        <div className="w-full">
          <h3>Pharmacy Name</h3>
          <p>Pharmacy location</p>
          <p>Pharmacy hours</p>
        </div>
        <div className="w-[200px] h-[200px] bg-gray-400">Map</div>
      </div>
    </div>
  );
};

export default Pharmacy;
