import React from "react";
import { TextInput, View, } from "react-native";
import MyIcon from "../week3/MyIcon";
import { Link } from "expo-router";

export default function HomeIconMenu() {
    return (
        <View style={{ marginHorizontal: 20, marginTop: -50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ backgroundColor: '#eeeeee', padding: 10, borderRadius: 10 }} >
                <TextInput style={{ fontSize: 20 }} placeholder="What're you looking for ?" />
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                <MyIcon title="Flex" name="dumbbell" size={30} color="orange" />
                <MyIcon title="Travel" name="plane" size={30} color="orange" />
                <MyIcon title="Resort" name="hotel" size={30} color="orange" />
                <MyIcon title="Health" name="heartbeat" size={30} color="orange" />
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                <MyIcon title="Pokemon" name="gamepad" size={30} color="orange" />
                <MyIcon title="Book Store" name="book" size={30} color="orange" />

                <Link href="/location" asChild>
                    <MyIcon title="Location" name="map-marker" size={30} color="orange" />
                </Link>
                <MyIcon title="More" name="ellipsis-h" size={30} color="orange" />
            </View>
        </View>
    );
}
