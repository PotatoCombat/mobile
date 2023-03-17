import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

const themeOverrides = {
  roundness: 4,
};

export const themes = {
  light: {
    ...MD3LightTheme,
    ...themeOverrides,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#3498db',
      secondary: '#f1c40f',
      tertiary: '#a1b2c3',
    },
  },
  dark: {
    ...MD3DarkTheme,
    ...themeOverrides,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#8eb5ce',
      secondary: '#f5df87',
      tertiary: '#ffffff',
    },
  },
};

export const themeIds = ['auto', 'light', 'dark'] as const;
export type ThemeId = (typeof themeIds)[number];
