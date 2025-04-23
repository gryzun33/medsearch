import { SortOrder } from '@/types/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SortState {
  priceOrder: SortOrder;
}

const initialState: SortState = {
  priceOrder: 'asc',
};

export const sortPharmaciesSlice = createSlice({
  name: 'sortPharmacies',
  initialState,
  reducers: {
    setPriceOrder: (state, action: PayloadAction<SortOrder>) => {
      state.priceOrder = action.payload;
    },
  },
});

export const { setPriceOrder } = sortPharmaciesSlice.actions;
export default sortPharmaciesSlice.reducer;
