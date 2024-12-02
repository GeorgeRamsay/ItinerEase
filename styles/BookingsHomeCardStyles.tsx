import { StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

export const useBookingCardStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    card: {
        padding: 16,
        margin: 16,
        backgroundColor: theme.secondaryColor_Green_Light,
        
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        elevation: 3,
        width: 256,

      },

      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: theme.primaryColor_Mild,
      },
      content: {
        color: theme.primaryColor_Green,
      },
      button: {
        backgroundColor: theme.secondaryColor_Green_Dark,
        color: theme.primaryColor_Mild,
        padding: 8,
        borderRadius: 8,
        marginTop: 16,
        alignSelf: 'flex-start',
      },
      buttonText: {
        color: theme.primaryColor_Mild,
        textAlign: 'center',
        paddingLeft: 12,
        paddingRight: 12,
      },


  });
};