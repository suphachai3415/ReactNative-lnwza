import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";


export default function Menu() {
  return (
    <View style={{ margin : 20 , padding : 10, borderWidth : 1, borderColor : 'gray', borderRadius : 20 }}>
      {/* View ก้อนที่ 1 */}
      <View >
        <TextInput style={{ fontSize : 20 }} placeholder="What're you looking for?" />
      </View>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="Wifi" name="wifi" size={30} color="blue" />
        <MyIcon title="Coffee" name="coffee" size={30} color="blue" />
        <MyIcon title="Bath" name="bath" size={30} color="blue" />
        <MyIcon title="Car" name="car" size={30} color="blue" />
        <MyIcon title="Paw" name="Paw" size={30} color="blue" />
      </View>
    </View>
  );
}
