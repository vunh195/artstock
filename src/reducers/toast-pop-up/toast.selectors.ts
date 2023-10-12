import { IRootState } from 'app/store';

export const selectToast = (state: IRootState) => state.toast;
