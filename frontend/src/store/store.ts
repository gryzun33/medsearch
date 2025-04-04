import { configureStore } from '@reduxjs/toolkit';
import { authApiSlice } from '../api/authApiSlice';
import persistedUserReducer from './slices/userSlice';
import toastReducer from './slices/toastSlice';
import { profileApiSlice } from '../api/profileApiSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { pharmacyApiSlice } from '@/api/pharmacyApiSlice';

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    toast: toastReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [profileApiSlice.reducerPath]: profileApiSlice.reducer,
    [pharmacyApiSlice.reducerPath]: pharmacyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApiSlice.middleware,
      profileApiSlice.middleware,
      pharmacyApiSlice.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
