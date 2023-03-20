import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import ThemeToggle from './components/ThemeToggle';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

// Define parameters for each screen here (or undefined if they don't need parameters)
type ScreenParams = {
  Home: undefined;
  Settings: undefined;
};

export type ScreenId = keyof ScreenParams;
export type ScreenProps<T extends ScreenId> = NativeStackScreenProps<ScreenParams, T>;

const Stack = createNativeStackNavigator<ScreenParams>();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerRight: () => <ThemeToggle />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
