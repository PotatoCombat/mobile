import { configureStore } from '@reduxjs/toolkit';

import { settingsReducer } from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
