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


    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 32,
      },
      viewAllButton: {
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: theme.primaryStandoutColor,
        borderRadius: 8,
      },
      viewAllText: {
        color: theme.primaryColor_Mild,

        fontSize: 16,
      },




  });
};