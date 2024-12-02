import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { usePlanStyles } from '../../styles/PlanStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlanLocationCard from '../../components/cards/PlanLocationCard';

export default function Plan() {
  const styles = usePlanStyles();

  const activities = [
    { description: 'Hotel Giacomo', startDate: '1st Jan', endDate: '- 5th Jan', time: '' },
    { description: 'Take train to cafe', startDate: '6th Jan', endDate: '', time: '10:00am' },
  ];
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Plan</Text>
        <View style={styles.iconGroup}>
        <Icon name="calendar-today" size={30} style={styles.icon} />
        <Icon name="list" size={30} style={styles.icon} />
        </View>
      </View>
      <PlanLocationCard
        location="Rome"
        startDate="1st Jan 2024"
        endDate="7th Jan 2024"
        activities={activities}
      />
    </View>
  );
}