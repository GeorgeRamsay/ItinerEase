import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { usePlanLocationCardStyles } from '../../styles/PlanLocationCardStyles';
interface Activity {
  description: string;
  startDate: string;
  endDate: string;
  time: string;
}

interface PlanLocationCardProps {
  location: string;
  startDate: string;
  endDate: string;
  activities: Activity[];
 

}


const activityColors = ['#FF5733', '#44DE5E', '#3357FF', '#FF33A1', '#A133FF'];
const locationColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];


const PlanLocationCard: React.FC<PlanLocationCardProps> = ({ location, startDate, endDate, activities }) => {
    const styles = usePlanLocationCardStyles();
    return (
    <View style={styles.card}>
      <Text style={styles.location}>{location}</Text>
      
      <View style={[styles.activities]}>
        <Text style={styles.dateTop}>{`${startDate}`}</Text>
        {activities.map((activity, index) => (
          <View key={index} style={[styles.activity, { borderRightColor: activityColors[index % activityColors.length] }]}>
            <Text style={styles.activityDescription}>{activity.description}</Text>
            <Text style={styles.activityDate}>{`${activity.startDate} ${activity.endDate}`}</Text>
            <Text style={styles.activityDate}>{activity.time}</Text>
          </View>
        ))}
        <Text style={styles.dateBottom}>{`${endDate}`}</Text>
      </View>
    </View>
  );
};



  export default PlanLocationCard;