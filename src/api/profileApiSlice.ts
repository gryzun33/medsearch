import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './api';
import { User } from '../types/user';

export const profileApiSlice = createApi({
  reducerPath: 'profileApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['user'],
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => '/auth/me',
      providesTags: ['user'],
    }),

    updateProfile: builder.mutation<User, Partial<User>>({
      query: (profileData) => ({
        url: '/auth/me',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApiSlice;
