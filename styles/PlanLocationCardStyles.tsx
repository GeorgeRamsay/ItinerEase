import {StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';


export const usePlanLocationCardStyles  = () => {
    const { theme } = useTheme();
    return StyleSheet.create({

    card: {
      marginVertical: 8,
    },

    location: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
      backgroundColor: theme.secondaryColor_Green_Light,
      padding: 8,
      color: theme.primaryColor_Mild,
      borderRadius: 8,
    },
    dateRange: {
      fontSize: 16,
      color: '#666',
      marginBottom: 16,
    },
    activities: {
      borderLeftWidth : 4,
      paddingHorizontal: 8,
      borderLeftColor: theme.primaryStandoutColor,
      
      
    },
    activity: {
      marginBottom: 32,
      borderRightWidth: 4,
      

    },
    activityDescription: {
      textAlign: 'right',
      fontSize: 16,
      paddingHorizontal: 8,
    },
    activityDate: {
      fontSize: 14,
      color: '#666',
      paddingHorizontal: 8,
      textAlign: 'right',
    },
    dateTop: {
      fontSize: 16,
      color: '#666',
      marginBottom: 32,
    },
    dateBottom: {
      fontSize: 16,
      color: '#666',
      marginTop: 32,
    },
  });
}