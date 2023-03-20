import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenProps } from '../Router';
import StatusBar from '../components/StatusBar';
import { useAppTheme } from '../hooks';
import { styles } from '../styles';

export default function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  const theme = useAppTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar />
      <Text style={{ color: theme.colors.primary }}>WELCOME BACK!</Text>
      <Text>Carrot</Text>
      <Button icon="cog" onPress={() => navigation.navigate('Settings')}>
        Settings
      </Button>
    </SafeAreaView>
  );
}
