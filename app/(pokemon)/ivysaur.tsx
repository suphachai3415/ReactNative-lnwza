import React from "react";
import { Image, View,Text } from "react-native";

export default function Ivysour() {
  return (
    <View style={{ flex: 1, alignItems : 'center'  }}>
        <Image source={{ uri : "https://i.pinimg.com/originals/46/7e/db/467edb818bc862ef7f54dece5df4d762.png"  }} style={{width: '100%', height: 500}} />
        <Text style={{ fontSize : 30, paddingTop : 20 }}>Ivysour</Text>                
    </View>
  );

}


