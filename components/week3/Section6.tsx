import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section6() {
  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
        Location
      </Text>

      <Text style={{ color: 'gray', marginTop: 5 }}>
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
      </Text>

      <View style={{ marginTop: 10 }}>
        <Image
          source={require('../../assets/images/map.jpg')}
          style={{
            width: '100%',
            height: 150,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}
