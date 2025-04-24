import { setPharmaciesView } from '@/store/slices/pharmaciesViewSlice';
import { ListIcon, MapPin } from 'lucide-react';
import { useDispatch } from 'react-redux';

type Props = {
  view: string;
};

const PharmaciesViewToggle = ({ view }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex rounded-sm shadow-md border border-gray-300 overflow-hidden">
      <label className="cursor-pointer">
        <input
          type="radio"
          name="view"
          value="list"
          checked={view === 'list'}
          onChange={() => dispatch(setPharmaciesView('list'))}
          className="peer hidden"
        />
        <div className="p-2 flex items-center justify-center text-gray-500 peer-checked:bg-gray-400 peer-checked:text-white transition-colors">
          <ListIcon className="w-4 h-4" />
        </div>
      </label>

      <label className="cursor-pointer">
        <input
          type="radio"
          name="view"
          value="map"
          checked={view === 'map'}
          onChange={() => dispatch(setPharmaciesView('map'))}
          className="peer hidden"
        />
        <div className="p-2 flex items-center justify-center text-gray-500 peer-checked:bg-gray-400 peer-checked:text-white transition-colors">
          <MapPin className="w-4 h-4" />
        </div>
      </label>
    </div>
  );
};

export default PharmaciesViewToggle;
