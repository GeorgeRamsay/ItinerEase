import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BookingsHomeCard from '../../components/cards/BookingsHomeCard';
import { usePlanStyles } from '../../styles/PlanStyles';

export default function Plan() {
  const styles = usePlanStyles();
  return (
    <View style={styles.page}>
      <Text style={[styles.title]}> Your Plan</Text>



    </View>
  );
}

