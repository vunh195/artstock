import { createSlice } from '@reduxjs/toolkit';
export interface IThemeReducer {
  darkMode: boolean;
}

const initialState: IThemeReducer = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state: IThemeReducer) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const ThemeReducer = themeSlice.reducer;
