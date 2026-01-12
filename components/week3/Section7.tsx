import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section7() {
  return (
    <View style={{ margin: 20 }}>
      
      {/* หัวข้อ */}
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Room Type
        </Text>
      </View>

      {/* เนื้อหา */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 10,
          padding: 10,
        }}
      >
        {/* รูป */}
        <View>
          <Image
            source={require('../../assets/images/room-8.jpg')}
            style={{
              width: 100,
              height: 80,
              borderRadius: 8,
            }}
          />
        </View>

        {/* ข้อความ */}
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>
            Standard Twin Room
          </Text>

          <Text style={{ marginTop: 5, fontSize: 16 }}>
            $399.99
          </Text>

          <Text style={{ marginTop: 5, color: 'red', fontSize: 12 }}>
            Hurry Up! This is your last room!
          </Text>
        </View>
      </View>

    </View>
  );
}
