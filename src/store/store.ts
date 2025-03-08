import { configureStore } from '@reduxjs/toolkit';
import { authApiSlice } from '../api/authApiSlice';
import userReducer from './slices/userSlice';
import { profileApiSlice } from '../api/profileApiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [profileApiSlice.reducerPath]: profileApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      profileApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
