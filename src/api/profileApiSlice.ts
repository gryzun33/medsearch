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
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error('Error with getting profile: ', err);
        }
      },
    }),

    updateProfile: builder.mutation<User, Partial<User>>({
      query: (profileData) => ({
        url: '/auth/me',
        method: 'PUT',
        body: profileData,
      }),
      invalidatesTags: ['user'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error('Error with updating profile: ', err);
        }
      },
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApiSlice;
