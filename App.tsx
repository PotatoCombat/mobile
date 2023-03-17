import { FC } from 'react';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Main from './src/Main';
import { themes } from './src/theme';

const ThemeProvider: FC = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = themes[colorScheme];
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
