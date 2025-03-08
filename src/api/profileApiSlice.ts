import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './api';
import { Profile } from '../types/user';

export const profileApiSlice = createApi({
  reducerPath: 'profileApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProfile: builder.query<Profile, void>({
      query: () => '/profile',
    }),

    updateProfile: builder.mutation<Profile, Partial<Profile>>({
      query: (profileData) => ({
        url: '/profile',
        method: 'PUT',
        body: profileData,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApiSlice;
