import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2() {
  return (
    <View style={styles.card}>
      
      {/* ชื่อโรงแรม */}
      <Text style={styles.title}>
        Hilton San Francisco
      </Text>

      {/* ดาว */}
      <View style={styles.starRow}>
        <FontAwesome name="star" size={18} color="#f5c518" />
        <FontAwesome name="star" size={18} color="#f5c518" />
        <FontAwesome name="star" size={18} color="#f5c518" />
        <FontAwesome name="star" size={18} color="#f5c518" />
        <FontAwesome name="star" size={18} color="#f5c518" />
      </View>

      {/* รายละเอียด */}
      <Text style={styles.description}>
        Facilities provided may range from a modest quality mattress in a small room to large suites
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: -30,          // 🔥 Negative margin (ทับรูป)
    padding: 15,
    borderRadius: 12,

    // เงา (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // เงา (Android)
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  starRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
});
