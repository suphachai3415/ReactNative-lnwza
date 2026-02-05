import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView } from "react-native"; 
import * as Location from "expo-location";
import { Link, Stack } from "expo-router";
import MyMapView from "@/components/week10/MyMapView";

export default function LocationScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return;
    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    // 1. เพิ่ม SafeAreaView ครอบชั้นนอกสุด เพื่อกันเนื้อหาไหลไปทับนาฬิกาบนหัวจอ
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}> 
      <Stack.Screen
        options={{
          title: "Location",
          headerShown: true,      // 2. มั่นใจว่าเปิด Header ไว้
          headerLeft: () => null, // 3. *** ไฮไลท์: สั่งให้ฝั่งซ้ายเป็นว่างๆ เพื่อลบปุ่ม Back ที่พังออก ***
          headerRight: () => (
            <Link href="/location-quiz" style={{ marginRight: 15 }}>
              <Text>Quiz</Text>
            </Link>
          ),
        }}
      />

      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={{ padding: 10 }}>
          {location ? new Date(location.timestamp).toString() : "-"}
        </Text>

        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: "#50E3C2",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>Lat/Lon</Text>
            <Text style={{ textAlign: "center" }}>
              {location?.coords?.latitude ?? "-"}
            </Text>
            <Text style={{ textAlign: "center" }}>
              {location?.coords?.longitude ?? "-"}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>
              Speed / Accuracy
            </Text>
            <Text style={{ textAlign: "center" }}>
              {location?.coords?.speed != null
                ? Math.round(location.coords.speed * 3.6)
                : "-"}{" "}
              km/h
            </Text>
            <Text style={{ textAlign: "center" }}>
              {location?.coords?.accuracy != null
                ? Math.round(location.coords.accuracy)
                : "-"}{" "}
              m.
            </Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <MyMapView location={location} setLocation={setLocation} />
        </View>
      </View>
    </SafeAreaView>
  );
}