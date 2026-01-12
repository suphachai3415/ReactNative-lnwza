import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const Item = ({ name, label }: any) => (
  <View style={{ alignItems: 'center' }}>
    <FontAwesome name={name} size={24} color="#4da6ff" />
    <Text style={{ fontSize: 12, marginTop: 4 }}>{label}</Text>
  </View>
);

export default function Section5() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      }}
    >
      <Item name="wifi" label="Wifi" />
      <Item name="coffee" label="Coffee" />
      <Item name="bath" label="Bath" />
      <Item name="car" label="Car" />
      <Item name="paw" label="Paw" />
    </View>
  );
}
