import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { useAppTheme } from '../hooks';

export default function StatusBar() {
  const theme = useAppTheme();
  return <ExpoStatusBar style={theme.dark ? 'light' : 'dark'} />;
}
