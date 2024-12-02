import React from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import BookingsHomeCard from './cards/BookingsHomeCard';

const { width: screenWidth } = Dimensions.get('window');


const bookingData = [
  {
    id: '1',
    title: 'Marriot Hotel, New York',
    dateRange: 'Jan 1 - Jan 5',
    address: '123 Main St',
  },
  {
    id: '2',
    title: 'Trump Tower, Chicago',
    dateRange: 'Feb 10 - Feb 15',
    address: '456 Elm St',
  },
  {
    id: '3',
    title: 'Hilton, San Francisco',
    dateRange: 'Mar 20 - Mar 25',
    address: '789 Oak St',
  },
  // Add more booking data as needed
];

const BookingCardsScroll: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={bookingData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <BookingsHomeCard
              title={item.title}
              dateRange={item.dateRange}
              address={item.address}
              onViewPress={() => console.log(`View ${item.title}`)}
            />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    left: -24,
  },
  cardContainer: {
  },
});

export default BookingCardsScroll;