import { StatusBar } from 'expo-status-bar';
import { Appearance } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppTheme } from './hooks';
import { styles } from './styles';

export default function Main() {
  const theme = useAppTheme();

  const changeTheme = () => {
    const isDarkScheme = Appearance.getColorScheme() === 'dark';
    const isAutoTheme = theme.dark === isDarkScheme;
    const themeId = !isAutoTheme ? 'auto' : isDarkScheme ? 'light' : 'dark';
    console.log(themeId);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={{ color: theme.colors.primary }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Text>Carrot</Text>
      <Button icon="palette" onPress={changeTheme}>
        Change Theme
      </Button>
    </SafeAreaView>
  );
}
