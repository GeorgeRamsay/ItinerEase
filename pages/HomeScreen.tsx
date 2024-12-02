import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BookingsHomeCard from '../components/cards/BookingsHomeCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.primaryColor_Green]}>Hi George</Text>
      <Text style={[ styles.primaryColor_Blue]}>Find your Destinations Today!</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,


    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
  },
  primaryColor_Green:
  {
    color: '#1E412D'
  },
  primaryColor_Blue:
  {
    color: '#465F6E'
  },
  primaryColor_Mild:
  {
    color: '#F2E8DB'
  },
  secondaryColor_Green_Light:
  {
    color: '#719B7F'

  },
  secondaryColor_Green_Dark:
  {
    color: '#5A846A'
  },
  primaryStandoutColor:
  {
    color: '#DE7B44'
  },

});