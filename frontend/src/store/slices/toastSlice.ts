import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
  showToast: boolean;
  message: string;
}

const initialState: ToastState = {
  showToast: false,
  message: '',
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<string>) {
      state.showToast = true;
      state.message = action.payload;
    },
    hideToast(state) {
      state.showToast = false;
      state.message = '';
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
