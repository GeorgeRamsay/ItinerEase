import {StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

export const usePlanStyles  = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
    page:{
        flex: 1,
        padding: 24,
        paddingTop: 74,
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        color: theme.primaryColor_Green,
    
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold',
    },

});
}