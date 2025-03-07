import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './api';

export const authApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: '/auth/signup',
        method: 'POST',
        body: credentials,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation } =
  authApiSlice;
