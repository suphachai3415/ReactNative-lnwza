import React from "react";
import { Image, View,Text } from "react-native";

export default function Pikachu() {
  return (
    <View style={{ flex: 1, alignItems : 'center'  }}>
        <Image source={{ uri : "https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg"  }} style={{width: '100%', height: 500}} />
        <Text style={{ fontSize : 30, paddingTop : 20 }}>Pikachu</Text>                
    </View>
  );

}

