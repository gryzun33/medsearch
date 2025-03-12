import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './api';
import { User, SignInData } from '../types/user';
import { login, logout } from '../store/slices/userSlice';
import { profileApiSlice } from './profileApiSlice';

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
        try {
          const { data } = await queryFulfilled;
          dispatch(profileApiSlice.util.invalidateTags(['user']));
          dispatch(login(data));
        } catch (error) {
          console.error('Login rtk failed:', error);
        }
      },
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),

      onQueryStarted: async (_, api) => {
        const { dispatch, queryFulfilled } = api;
        try {
          await queryFulfilled;
          dispatch(profileApiSlice.util.invalidateTags(['user']));
          dispatch(logout());
        } catch (err) {
          console.error('Logout failed:', err);
        }
      },
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation } =
  authApiSlice;
