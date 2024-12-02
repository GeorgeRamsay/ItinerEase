// homeScreenStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

export const useHomeScreenStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: theme.backgroundColor,
      paddingTop: 74,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    primaryColor_Green: {
      color: theme.primaryColor_Green,
    },
    primaryColor_Blue: {
      color: theme.primaryColor_Blue,
    },
  });
};