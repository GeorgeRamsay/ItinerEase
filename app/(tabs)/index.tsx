import React from 'react';
import HomeScreen from './HomeScreen';
import { ThemeProvider } from '../../styles/ThemeContext';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import AppNavigator from '../../navigation/AppNavigator';


export default function App() {
  return(
    <ThemeProvider>
      <NavigationIndependentTree>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </NavigationIndependentTree>
    </ThemeProvider>
  );
}