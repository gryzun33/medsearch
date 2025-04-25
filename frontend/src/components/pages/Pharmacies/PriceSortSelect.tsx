import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { setPriceOrder } from '@/store/slices/pharmaciesViewSlice';
import { RootState } from '@/store/store';
import { SortOrder } from '@/types/common';
import { ArrowDownNarrowWide, ArrowDownWideNarrow } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  view: string;
};

export const PriceSortSelect = ({ view }: Props) => {
  const dispatch = useDispatch();
  const sortOrder = useSelector(
    (state: RootState) => state.pharmaciesView.priceOrder
  );

  return (
    <Select
      value={sortOrder}
      onValueChange={(value: SortOrder) => dispatch(setPriceOrder(value))}
    >
      <SelectTrigger
        className="sm:w-[120px] p-2 sm:p-1 !sm:h-7 text-xs sm:self-end"
        disabled={view === 'map'}
      >
        <div className="flex items-center gap-1">
          {sortOrder === 'asc' ? (
            <ArrowDownNarrowWide className="w-4 h-4" />
          ) : (
            <ArrowDownWideNarrow className="w-4 h-4" />
          )}
          <span className="hidden sm:inline text-gray-600">
            {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent className="text-gray-600 text-xs">
        <SelectItem className="text-xs" value="asc">
          Low to High
        </SelectItem>
        <SelectItem className="text-xs" value="desc">
          High to Low
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
