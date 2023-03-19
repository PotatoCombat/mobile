import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ThemeId } from '../theme';

interface SettingsState {
  theme: ThemeId;
}

const initialState: SettingsState = {
  theme: 'auto',
};

console.log(initialState.theme);

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeId>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
