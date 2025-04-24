import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PharmaciesView, SortOrder } from '@/types/common';

interface PharmaciesViewState {
  pharmaciesView: PharmaciesView;
  priceOrder: SortOrder;
}

const initialState: PharmaciesViewState = {
  pharmaciesView: 'list',
  priceOrder: 'asc',
};

const pharmaciesViewSlice = createSlice({
  name: 'pharmaciesView',
  initialState,
  reducers: {
    setPharmaciesView: (state, action: PayloadAction<PharmaciesView>) => {
      state.pharmaciesView = action.payload;
    },
    setPriceOrder: (state, action: PayloadAction<SortOrder>) => {
      state.priceOrder = action.payload;
    },
  },
});

export const { setPharmaciesView, setPriceOrder } = pharmaciesViewSlice.actions;
export default pharmaciesViewSlice.reducer;
