import { View, Image, StyleSheet } from 'react-native';

export default function Section1() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/room-6.jpg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 160,        // 🔥 คุมความสูง
    resizeMode: 'cover' // ครอบภาพไม่ยืด
  },
});
