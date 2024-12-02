import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BookingsHomeCard from '../../components/cards/BookingsHomeCard';
import { useHomeScreenStyles } from '../../styles/HomeScreenStyles';


export default function HomeScreen() {
  const styles = useHomeScreenStyles();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.primaryColor_Green]}>Hi George</Text>
      <Text style={styles.primaryColor_Blue}>Find your Destinations Today!</Text>
      <Text style={[styles.title, styles.primaryColor_Green]}>Today's Bookings</Text>

      <BookingsHomeCard
        title="Hotel"
        dateRange="12/12/2021 - 12/14/2021"
        address="1234 Hotel St"
        onViewPress={() => console.log('View Pressed')}
      />
    </View>
  );
}

