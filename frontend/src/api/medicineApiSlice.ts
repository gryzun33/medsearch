import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './api';

export const medicineApiSlice = createApi({
  reducerPath: 'medicineApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    searchMedicines: builder.query({
      query: (searchText) => `medicines/search?searchText=${searchText}`,
    }),
  }),
});

export const { useSearchMedicinesQuery } = medicineApiSlice;
