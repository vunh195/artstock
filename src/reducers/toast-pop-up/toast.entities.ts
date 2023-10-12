export enum TOAST_STATUS {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  NONE = 'NONE',
}

export interface IStateToast {
  title: string;
  description?: string;
  status: TOAST_STATUS;
}
