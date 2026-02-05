import React from "react";
import { Image, View,Text } from "react-native";

export default function Charmander() {
  return (
    <View style={{ flex: 1, alignItems : 'center'  }}>
        <Image source={{ uri : "https://i.pinimg.com/originals/dc/75/b9/dc75b96b4141c0a0f5d2658b084e170b.png"  }}  style={{width: '100%', height: 500}} />
        <Text style={{ fontSize : 30, paddingTop : 20 }}>Charmander</Text>                
    </View>
  );

}

