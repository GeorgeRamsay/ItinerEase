import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface BookingsHomeCardProps {
  title: string;
  dateRange: string;
  address: string;
  onViewPress: () => void;
}

const BookingsHomeCard: React.FC<BookingsHomeCardProps> = ({ title, dateRange, address, onViewPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{dateRange}</Text>
      <Text>{address}</Text>
      <Button title="View" onPress={onViewPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default BookingsHomeCard;