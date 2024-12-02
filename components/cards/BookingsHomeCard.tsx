import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useBookingCardStyles,  } from '../../styles/BookingsHomeCardStyles';
interface BookingsHomeCardProps {
  title: string;
  dateRange: string;
  address: string;
  onViewPress: () => void;
}

const BookingsHomeCard: React.FC<BookingsHomeCardProps> = ({ title, dateRange, address, onViewPress }) => {
  const styles = useBookingCardStyles();
  
  return (
    <View style={styles.card}>

      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
      <Text style={styles.content} numberOfLines={1} ellipsizeMode="tail">{dateRange}</Text>
      <Text style={styles.content} numberOfLines={1} ellipsizeMode="tail">{address}</Text>
      <TouchableOpacity style={styles.button} onPress={onViewPress}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};


export default BookingsHomeCard;