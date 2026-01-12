import React from 'react';
import { View, Text } from 'react-native';

export default function Section4() {
  return (
    <View
      style={{
        marginHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
      }}
    >
      {/* หัวข้อ */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Hotel Description
      </Text>

      {/* รายละเอียด */}
      <Text style={{ color: 'gray', lineHeight: 20 }}>
        218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
      </Text>
    </View>
  );
}
