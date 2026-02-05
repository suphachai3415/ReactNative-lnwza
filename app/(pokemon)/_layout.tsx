import { FontAwesome } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function PokemonLayout() {
  const router = useRouter();

  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#FFD700',
      headerShown: true,
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.replace("/")} style={{ marginLeft: 15 }}>
          <FontAwesome name="home" size={24} color="#FFD700" />
        </TouchableOpacity>
      ),
    }}>
      <Tabs.Screen name="pikachu" options={{ title: "Pikachu", tabBarIcon: ({color}) => <FontAwesome name="bolt" size={20} color={color} /> }} />
      <Tabs.Screen name="charmander" options={{ title: "Charmander", tabBarIcon: ({color}) => <FontAwesome name="fire" size={20} color={color} /> }} />
      <Tabs.Screen name="ivysaur" options={{ title: "Ivysaur", tabBarIcon: ({color}) => <FontAwesome name="leaf" size={20} color={color} /> }} />
    </Tabs>
  );
}