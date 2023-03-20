import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import StatusBar from '../components/StatusBar';
import { useAppTheme } from '../hooks';
import { styles } from '../styles';

export default function SettingsScreen() {
  const theme = useAppTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar />
      <Text style={{ color: theme.colors.primary }}>No settings available.</Text>
      <Text>Carrot</Text>
    </SafeAreaView>
  );
}
