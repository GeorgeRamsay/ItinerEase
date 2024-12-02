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
        color: theme.primaryColor_Green,
    
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 32,
    },
    iconGroup: {
        flexDirection: 'row',
        gap: 16,    
    },

});
}