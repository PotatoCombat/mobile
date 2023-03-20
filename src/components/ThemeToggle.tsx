import { Appearance } from 'react-native';
import { Switch, Text } from 'react-native-paper';

import { useAppDispatch, useAppTheme } from '../hooks';
import { setTheme } from '../slices/settingsSlice';

export default function ThemeToggle() {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();

  const changeTheme = () => {
    const isDarkScheme = Appearance.getColorScheme() === 'dark';
    const isAutoTheme = theme.dark === isDarkScheme;
    const themeId = !isAutoTheme ? 'auto' : isDarkScheme ? 'light' : 'dark';
    dispatch(setTheme(themeId));
  };

  return (
    <>
      <Text>Dark </Text>
      <Switch color={theme.colors.primary} value={theme.dark} onValueChange={changeTheme} />
    </>
  );
}
