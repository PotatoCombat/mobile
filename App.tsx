import { NavigationContainer as NavigationProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import Router from './src/Router';
import { useAppSelector } from './src/hooks';
import { store } from './src/store';
import { themes } from './src/theme';

function Main() {
  const colorScheme = useColorScheme();
  const themeId = useAppSelector((state) => state.settings.theme);
  const theme = themeId === 'auto' ? themes[colorScheme] : themes[themeId];
  return (
    <PaperProvider theme={theme}>
      <NavigationProvider theme={theme}>
        <Router />
      </NavigationProvider>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <StoreProvider store={store}>
      <Main />
    </StoreProvider>
  );
}
