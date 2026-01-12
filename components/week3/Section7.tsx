import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Section7() {
  return (
    <View style={styles.section7Container}>

      <Text style={styles.section7Title}>
        Room Type
      </Text>

      <View style={styles.section7Card}>

        <Image
          source={require('../../assets/images/room-8.jpg')}
          style={styles.section7Image}
        />

        <View style={styles.section7Content}>
          <Text style={styles.section7RoomName}>
            Standard Twin Room
          </Text>

          <Text style={styles.section7Price}>
            $399.99
          </Text>

          <Text style={styles.section7Warning}>
            Hurry Up! This is your last room!
          </Text>
        </View>

      </View>
    </View>
  );
}
