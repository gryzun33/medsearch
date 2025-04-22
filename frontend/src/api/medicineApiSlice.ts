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
    getMedicineWithPharmacies: builder.query<MedWithPharmaciesResponse, string>(
      {
        query: (id) => `medicines/${id}/pharmacies`,
      }
    ),
  }),
});

export const { useSearchMedicinesQuery, useGetMedicineWithPharmaciesQuery } =
  medicineApiSlice;
