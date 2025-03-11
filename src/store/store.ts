import { configureStore } from '@reduxjs/toolkit';
import { authApiSlice } from '../api/authApiSlice';
import userReducer from './slices/userSlice';
import toastReducer from './slices/toastSlice';
import { profileApiSlice } from '../api/profileApiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
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
