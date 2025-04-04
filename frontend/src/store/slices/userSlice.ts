import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

interface UserState {
  isLogin: boolean;
  user: User;
}

const initialState: UserState = {
  isLogin: false,
  user: {
    id: '',
    name: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLogin = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = { id: '', name: '', email: '' };
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isLogin'],
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);
export const { login, logout } = userSlice.actions;
export default persistedUserReducer;
