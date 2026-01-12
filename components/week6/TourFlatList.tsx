import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function TourFlatList(props: any) {
  const tours = [
    { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
    { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" },
    { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg" },
    { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg" },
    { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
  ];

  const [onlineTours, setOnlineTours] = useState([]);

  const loadOnlineTours = async () => {
    try {
      let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
      let data = await text.json();
      setOnlineTours(data);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    loadOnlineTours();
  }, []);

  const CARD_WIDTH = 200;
  const CARD_HEIGHT = 150;

 const renderItem = ({ item }: any) => {
  return (
    <View style={{ marginRight: 15, borderRadius: 10, overflow: 'hidden' }}>
      <Image 
        source={{ uri: item.uri }}
        style={{ width: 200, height: 150 }}
      />
      {/* Title overlay เหมือน Tours */}
      <View style={{
        position: "absolute",
        bottom: 0,
        width: 200,
        height: 30, // เหมือน Tours
        paddingHorizontal: 10,
        backgroundColor: "black",
        opacity: 0.5,
        justifyContent: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}>
        <Text style={{
          fontSize: 20,  // เหมือน Tours
          color: "white",
          fontWeight: "500"
        }}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};



  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Tour With FlatList</Text>
      <Text style={{ color: "grey", marginBottom: 10 }}>Let find out what most interesting things</Text>
      <ScrollView horizontal={true} style={{ marginTop: 20 }}>
      <FlatList
        horizontal
        data={onlineTours.length > 0 ? onlineTours : tours}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 15 }}
      />
      </ScrollView>
    </View>
  );
}
