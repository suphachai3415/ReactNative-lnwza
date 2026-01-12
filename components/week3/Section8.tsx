import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Section8() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
      }}
    >
      {/* ฝั่งซ้าย */}
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Price
        </Text>
        <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}>
          $399.99
        </Text>
        <Text style={{ color: 'gray' }}>
          per night
        </Text>
      </View>

      {/* ปุ่ม */}
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}
