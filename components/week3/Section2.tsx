import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function Section2() {
  return (
    <View style={styles.section2Card}>

      <Text style={styles.section2Title}>
        Hilton San Francisco
      </Text>

      <View style={styles.section2RatingRow}>
        {[1, 2, 3, 4].map((_, i) => (
          <View key={i} style={styles.section2StarItem}>
            <FontAwesome name="star-o" size={20} color="#f5c518" />
            <FontAwesome
              name="star"
              size={20}
              color="#f5c518"
              style={styles.section2StarFill}
            />
          </View>
        ))}

        <View style={styles.section2StarItem}>
          <FontAwesome name="star-o" size={20} color="#f5c518" />
          <FontAwesome
            name="star-half-empty"
            size={20}
            color="#f5c518"
            style={styles.section2StarFill}
          />
        </View>
      </View>

      <Text style={styles.section2Description}>
        Facilities provided may range from a modest quality mattress in a small room to large suites
      </Text>

    </View>
  );
}
