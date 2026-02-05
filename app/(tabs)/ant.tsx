import React from 'react';
import { View, Image} from 'react-native';


export default function Ant() {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri : "https://raw.githubusercontent.com/arc6828/react-native-2025/refs/heads/master/assets/img/ant.png"  }} 
                style={{width: '100%', height: 500}}
                /> 
                           
        </View>
    );
}
