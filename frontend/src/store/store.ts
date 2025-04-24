import { configureStore } from '@reduxjs/toolkit';
import { authApiSlice } from '../api/authApiSlice';
import persistedUserReducer from './slices/userSlice';
import searchReducer from './slices/searchSlice';
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
import { medicineApiSlice } from '@/api/medicineApiSlice';
import pharmaciesViewReducer from './slices/pharmaciesViewSlice';

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    search: searchReducer,
    // sortPharmacies: sortPharmaciesReducer,
    pharmaciesView: pharmaciesViewReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [profileApiSlice.reducerPath]: profileApiSlice.reducer,
    [pharmacyApiSlice.reducerPath]: pharmacyApiSlice.reducer,
    [medicineApiSlice.reducerPath]: medicineApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApiSlice.middleware,
      profileApiSlice.middleware,
      pharmacyApiSlice.middleware,
      medicineApiSlice.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
