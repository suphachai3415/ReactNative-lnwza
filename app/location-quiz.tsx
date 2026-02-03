import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

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
                    {/* --- ปรับ Marker ให้สวยแบบ Modern --- */}
                    <View style={styles.markerContainer}>
                        <View style={styles.markerBubble}>
                            <FontAwesome name="user" size={18} color="white" />
                        </View>
                        <View style={styles.markerTail} />
                    </View>

                    {/* --- ปรับ Callout ให้รองรับชื่อยาวๆ --- */}
                    <Callout tooltip={true}>
                        <View style={styles.calloutWrapper}>
                            <View style={styles.calloutBubble}>
                                <Text style={styles.calloutHeader}>USER PROFILE</Text>
                                <View style={styles.divider} />
                                <Text style={styles.calloutName}>
                                    {item.user_id}
                                </Text>
                            </View>
                            {/* หางของช่องคำพูด */}
                            <View style={styles.calloutArrow} />
                        </View>
                    </Callout>
                </Marker>
            ))}
        </MapView>
    );
}

const styles = StyleSheet.create({
    // Marker Styles
    markerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 45,
    },
    markerBubble: {
        backgroundColor: '#1E90FF', // สีน้ำเงินสว่าง
        padding: 6,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    markerTail: {
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#FFFFFF',
        marginTop: -1,
    },

    // Callout Styles (ช่องแสดงชื่อ)
    calloutWrapper: {
        alignItems: 'center',
        width: 220, // เพิ่มความกว้างรองรับนามสกุล
    },
    calloutBubble: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        // เงาสำหรับ iOS และ Android
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    calloutHeader: {
        fontSize: 10,
        fontWeight: '700',
        color: '#1E90FF',
        marginBottom: 4,
        letterSpacing: 1,
    },
    calloutName: {
        fontSize: 15,
        fontWeight: '500',
        color: '#333',
        flexWrap: 'wrap', // สำคัญ: ป้องกันชื่อล้น
        textAlign: 'left',
    },
    divider: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginBottom: 8,
    },
    calloutArrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#FFFFFF',
        borderWidth: 10,
        alignSelf: 'center',
        marginTop: -1,
    },
});