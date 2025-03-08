import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './api';
import { User, SignInData } from '../types/user';
import { login, logout } from '../store/slices/userSlice';

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

    login: builder.mutation<User, SignInData>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: async (_, api) => {
        const { dispatch, queryFulfilled } = api;

        const { data } = await queryFulfilled;
        dispatch(login(data));
      },
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),

      onQueryStarted: async (_, api) => {
        const { dispatch, queryFulfilled } = api;

        await queryFulfilled;
        dispatch(logout());
      },
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation } =
  authApiSlice;
