import Cover from "@/components/week6/Cover";
import Event from "@/components/week6/Event";
import HomeIconMenu from "@/components/week6/HomeIconMenu";
import Tour from "@/components/week6/Tour";
import TourFlatList from "@/components/week6/TourFlatList";
import React from "react";
import { ScrollView, View, SafeAreaView, TouchableOpacity } from "react-native"; 
import { Stack, useRouter } from "expo-router"; // 1. เพิ่ม useRouter ตรงนี้
import { FontAwesome } from "@expo/vector-icons"; // 2. เพิ่มไอคอน

export default function Home() {
  const router = useRouter(); // 3. ประกาศตัวแปร router

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen
        options={{
          title: "Home", // เปลี่ยนชื่อ Title ให้ตรงหน้า
          headerShown: true,
          headerTitleAlign: 'center',
          // 4. *** ไฮไลท์: เปลี่ยนจาก null เป็นปุ่มรูปบ้าน เพื่อกลับหน้าแรก ***
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => router.replace("/")} 
              style={{ marginLeft: 15 }}
            >
              <FontAwesome name="home" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView>
        {/* ลบ marginTop: 20 ออกได้เลย เพราะมี SafeAreaView ช่วยแล้ว หน้าจะได้ไม่ล้นลงมาเกินไป */}
        <View style={{ flex: 1, backgroundColor: 'lightyellow' }}>
          <Cover />
          <HomeIconMenu />
          <Tour style={{ margin: 20 }} />
          <TourFlatList style={{ margin: 20 }} />
          <Event style={{ margin: 20 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}