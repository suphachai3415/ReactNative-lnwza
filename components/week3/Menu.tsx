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
        <MyIcon title="Hotel" name="building" size={30} color="orange" />
        <MyIcon title="Tour" name="map-marker" size={30} color="orange" />
        <MyIcon title="Car" name="car" size={30} color="orange" />
        <MyIcon title="Flight" name="plane" size={30} color="orange" />
      </View>
      {/* View ก้อนที่ 3 */}
      <View style={{ flexDirection : "row", marginTop : 10 }}>
        <MyIcon title="Cruise" name="ship" size={30} color="orange" />
        <MyIcon title="Bus" name="bus" size={30} color="orange" />
        <MyIcon title="Event" name="star" size={30} color="orange" />
        <MyIcon title="More" name="ellipsis-h" size={30} color="orange" />
      </View>
    </View>
  );
}
