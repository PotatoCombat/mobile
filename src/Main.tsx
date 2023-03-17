import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Carrot</Text>
    </SafeAreaView>
  );
}
