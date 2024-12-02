import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import BookingsHomeCard from '../../components/cards/BookingsHomeCard';
import { useHomeScreenStyles } from '../../styles/HomeScreenStyles';
import BookingCardsScroll from '../../components/BookingCardsScroll';
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {
  const styles = useHomeScreenStyles();
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.primaryColor_Green]}>Hi George</Text>
      <Text style={styles.primaryColor_Blue}>Find your Destinations Today!</Text>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, styles.primaryColor_Green]}>Nearest Bookings</Text>
        <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('bookings')}>
          <Text style={styles.viewAllText}>View All →</Text>
        </TouchableOpacity>
      </View>
      <BookingCardsScroll />

      <View style={styles.headerContainer}>
      <Text style={[styles.title, styles.primaryColor_Green]}>Upcoming Tasks</Text>
      <TouchableOpacity style={styles.viewAllButton} onPress={() => console.log('View All Pressed')}>
          <Text style={styles.viewAllText}>View All →</Text>
        </TouchableOpacity>
      </View>
      
      

    </View>
  );
}

