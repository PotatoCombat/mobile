import { DefaultTheme as RNNLightTheme, DarkTheme as RNNDarkTheme } from '@react-navigation/native';
import { MD3LightTheme, MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';

export type ThemeId = 'auto' | 'light' | 'dark';

const themeOverrides = {
  roundness: 4,
};

const lightColors = {
  primary: '#3498db',
  secondary: '#f1c40f',
  tertiary: '#a1b2c3',
};

const darkColors = {
  primary: '#8eb5ce',
  secondary: '#f5df87',
  tertiary: '#ffffff',
};

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: RNNLightTheme,
  reactNavigationDark: RNNDarkTheme,
});

export const themes = {
  light: {
    ...MD3LightTheme,
    ...LightTheme,
    ...themeOverrides,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
      ...lightColors,
    },
  },
  dark: {
    ...MD3DarkTheme,
    ...DarkTheme,
    ...themeOverrides,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
      ...darkColors,
    },
  },
};
