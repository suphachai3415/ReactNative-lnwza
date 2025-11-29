import React from 'react';
import { Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding : 20  }}>
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>Hotel Description</Text>
                <Text style={{ color : '#444444' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>    
    );
}
