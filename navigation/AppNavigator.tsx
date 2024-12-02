import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../app/(tabs)/HomeScreen';
import TabNavigator from '../app/(tabs)/_layout';
import Bookings from '@/app/(tabs)/bookings';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;