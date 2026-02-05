import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, Link } from "expo-router"; // <-- มั่นใจว่า import 2 ตัวนี้มาด้วย

export default function LocationQuiz() {
    const [locations, setLocations] = useState<any[]>([]);

    const loadLocations = async () => {
        try {
            const response = await fetch("https://ckartisan.com/api/location");
            const data = await response.json();
            setLocations(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadLocations();
    }, []);

    return (
        // *** ไฮไลท์ 1: ใช้ SafeAreaView ครอบชั้นนอกสุด เพื่อกันเนื้อหาไหลไปทับ Status Bar ***
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

            {/* *** ไฮไลท์ 2: ใช้ Stack.Screen เพื่อคุม Header รายหน้า *** */}
            <Stack.Screen
                options={{
                    title: "Location Quiz",
                    headerShown: true,
                    headerLeft: () => null, // *** ไฮไลท์ 3: ลบปุ่ม Back ที่แอบตามมาจากหน้าอื่น ***

                }}
            />

            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 13.7563,
                    longitude: 100.5018,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                }}
            >
                {locations.map((item, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: Number(item.latitude),
                            longitude: Number(item.longitude),
                        }}
                    >
                        <View style={styles.markerContainer}>
                            <View style={styles.markerBubble}>
                                <FontAwesome name="user" size={18} color="white" />
                            </View>
                            <View style={styles.markerTail} />
                        </View>

                        <Callout tooltip={true}>
                            <View style={styles.calloutWrapper}>
                                <View style={styles.calloutBubble}>
                                    <Text style={styles.calloutHeader}>USER PROFILE</Text>
                                    <View style={styles.divider} />
                                    <Text style={styles.calloutName}>
                                        {item.user_id}
                                    </Text>
                                </View>
                                <View style={styles.calloutArrow} />
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>

          
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    markerContainer: { alignItems: 'center', justifyContent: 'center', width: 40, height: 45 },
    markerBubble: { backgroundColor: '#1E90FF', padding: 6, borderRadius: 20, borderWidth: 2, borderColor: '#FFFFFF', elevation: 10 },
    markerTail: { width: 0, height: 0, borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 8, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderTopColor: '#FFFFFF', marginTop: -1 },
    calloutWrapper: { alignItems: 'center', width: 220 },
    calloutBubble: { width: '100%', backgroundColor: '#FFFFFF', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 10, borderColor: '#E0E0E0', borderWidth: 1, elevation: 5 },
    calloutHeader: { fontSize: 10, fontWeight: '700', color: '#1E90FF', marginBottom: 4, letterSpacing: 1 },
    calloutName: { fontSize: 15, fontWeight: '500', color: '#333', flexWrap: 'wrap', textAlign: 'left' },
    divider: { height: 1, backgroundColor: '#F0F0F0', marginBottom: 8 },
    calloutArrow: { backgroundColor: 'transparent', borderColor: 'transparent', borderTopColor: '#FFFFFF', borderWidth: 10, alignSelf: 'center', marginTop: -1 },
});