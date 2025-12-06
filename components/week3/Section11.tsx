import React from 'react';
import { Image, Text, View } from 'react-native';
export default function Section11() {
    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2, borderRadius: 20 }} source={require("@/components/week3/Section1")} />
            </View>

        </View>
    );
}
