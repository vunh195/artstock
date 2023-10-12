import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IStateToast, TOAST_STATUS } from './toast.entities';

const initialState: IStateToast = {
  title: '',
  description: '',
  status: TOAST_STATUS.NONE,
};

const toastPopupSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToastPopup(state: IStateToast, action: PayloadAction<IStateToast>) {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.status = action.payload.status;
      try {
        const toast = document.querySelector('#toast-popup') as HTMLDivElement;
        if (!toast) return;
        toast.style.opacity = '1';
        toast.style.visibility = 'visible';
      } catch (err) {}
    },
    removeToastPopup(state: IStateToast) {
      try {
        const toast = document.querySelector('#toast-popup') as HTMLDivElement;
        if (!toast) return;
        toast.style.opacity = '0';
        toast.style.visibility = 'hidden';
      } catch (err) {}
      setTimeout(() => {
        (state.title = ''), (state.description = '');
      }, 500);
    },
  },
});

export const { setToastPopup, removeToastPopup } = toastPopupSlice.actions;

export const ToastPopupReducer = toastPopupSlice.reducer;
