import { FontAwesome } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'tomato',
      headerShown: true, // เปิดเฉพาะกลุ่มนี้
      headerTitleAlign: 'center', // เอาชื่อไว้ตรงกลาง
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.replace("/")} style={{ marginLeft: 15 }}>
          <FontAwesome name="home" size={24} color="tomato" />
        </TouchableOpacity>
      ),
    }}>
      <Tabs.Screen name="ant" options={{ title: "Ant", tabBarIcon: ({color}) => <FontAwesome name="bug" size={20} color={color} /> }} />
      <Tabs.Screen name="bird" options={{ title: "Bird", tabBarIcon: ({color}) => <FontAwesome name="twitter" size={20} color={color} /> }} />
      <Tabs.Screen name="cat" options={{ title: "Cat", tabBarIcon: ({color}) => <FontAwesome name="paw" size={20} color={color} /> }} />
    </Tabs>
  );
}