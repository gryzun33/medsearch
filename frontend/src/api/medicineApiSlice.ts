import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './api';
import {
  MedicineSearchResponse,
  MedWithPharmaciesResponse,
} from '@/types/medicine';

export const medicineApiSlice = createApi({
  reducerPath: 'medicineApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    searchMedicines: builder.query<MedicineSearchResponse[], string>({
      query: (searchText) => `medicines/search?searchText=${searchText}`,
    }),
    getMedicineWithPharmacies: builder.query<
      MedWithPharmaciesResponse,
      { id: string; order?: 'asc' | 'desc' }
    >({
      query: ({ id, order = 'asc' }: { id: string; order?: 'asc' | 'desc' }) =>
        `medicines/${id}/pharmacies?order=${order}`,
    }),
  }),
});

export const { useSearchMedicinesQuery, useGetMedicineWithPharmaciesQuery } =
  medicineApiSlice;
