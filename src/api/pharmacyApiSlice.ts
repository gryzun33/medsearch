import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './api';
import { Pharmacy } from '../types/pharmacy';

export const pharmacyApiSlice = createApi({
  reducerPath: 'pharmacyApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPharmacies: builder.query<Pharmacy[], void>({
      query: () => '/pharmacy',
    }),
    getPharmacyById: builder.query<Pharmacy, string>({
      query: (id) => `/pharmacy/${id}`,
    }),
  }),
});

export const { useGetPharmaciesQuery, useGetPharmacyByIdQuery } =
  pharmacyApiSlice;
