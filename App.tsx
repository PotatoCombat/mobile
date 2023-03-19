import { FC } from 'react';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import Main from './src/Main';
import { useAppSelector } from './src/hooks';
import { store } from './src/store';
import { themes } from './src/theme';

const ThemeProvider: FC = ({ children }) => {
  const colorScheme = useColorScheme();
  const themeId = useAppSelector((state) => state.settings.theme);
  const theme = themeId === 'auto' ? themes[colorScheme] : themes[themeId];
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </StoreProvider>
  );
}
