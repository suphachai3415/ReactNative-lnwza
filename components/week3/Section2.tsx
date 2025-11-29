import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
export default function Hotel() {
    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 20 }}>Hilton San Francisco</Text>
            </View>

            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
                <View>
                    <Text style={{ fontSize: 16, color: 'gray' }}>100 Reviews</Text>
                </View>
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ marginTop: -25 }}>
                <Text style={{ fontSize: 20, color: 'red' }} >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>

            <View style={{ backgroundColor: "red" }}>
            </View>
            <View style={{ backgroundColor: "red", marginTop: -25 }}>
            </View>

        </View>
    );
}
