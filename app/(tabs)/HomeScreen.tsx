import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BookingsHomeCard from '../../components/cards/BookingsHomeCard';
import { generalStyle } from '../../styles/generalStyle'; // Ensure the correct import path


export default function HomeScreen() {
  return (
    <View style={generalStyle.container}>
      <Text style={[generalStyle.title, generalStyle.primaryColor_Green]}>Hi George</Text>
      <Text style={[ generalStyle.primaryColor_Blue]}>Find your Destinations Today!</Text>
      <Text style={[generalStyle.title, generalStyle.primaryColor_Green]}>Today's Bookings</Text>

      <BookingsHomeCard
        title="Hotel"
        dateRange="12/12/2021 - 12/14/2021"
        address="1234 Hotel St"
        onViewPress={() => console.log('View Pressed')}
      />
    </View>
  );
}

