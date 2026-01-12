import React from 'react';
import { View, Text } from 'react-native';

export default function Section3() {
  return (
    <View style={{ margin: 20 }}>
      
      {/* แถวหลัก */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        
        {/* คะแนน */}
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#f89c74',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
            9.5
          </Text>
        </View>

        {/* ข้อความ */}
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            Excellent
          </Text>
          <Text style={{ color: 'gray' }}>
            See 801 reviews
          </Text>
        </View>

      </View>
    </View>
  );
}
