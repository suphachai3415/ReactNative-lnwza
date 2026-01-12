import { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Text, View, StyleSheet } from "react-native";

export default function EventList(props: any) {
  const events = [
    { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg" , "month" : "DEC", "date" : "30", "datetime" : "Thu, DEC 30, 09.00 am" , "place" : "London" },
    { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg" , "month" : "DEC", "date" : "31", "datetime" : "Thu, DEC 31, 09.00 am", "place" : "Paris"},
    { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg" , "month" : "JAN", "date" : "01", "datetime" : "Thu, JAN 01, 09.00 am", "place" : "Canada"},
    { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg" , "month" : "JAN", "date" : "11", "datetime" : "Thu, JAN 11, 09.00 am", "place" : "USA"},
    { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg" , "month" : "JAN", "date" : "21", "datetime" : "Thu, JAN 21, 09.00 am", "place" : "Thailand"}
  ];

  const [onlineEvents, setOnlineEvents] = useState([]);

  const loadOnlineEvents = async () => {
    try {
      let res = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
      let data = await res.json();
      setOnlineEvents(data);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    loadOnlineEvents();
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.card}>
        <Image 
          source={{ uri: item.uri }} 
          style={styles.image}
        />
        <View style={styles.infoRow}>
          {/* Left: Date */}
          <View style={styles.dateBox}>
            <Text style={styles.month}>{item.month}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          {/* Right: Info */}
          <View style={styles.infoBox}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.datetime}>{item.datetime}</Text>
            <Text style={styles.place}>{item.place}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 5 }}>Upcoming Events</Text>
      <Text style={{ color: "grey", marginBottom: 15 }}>Don’t miss these events</Text>
      <FlatList
        horizontal
        data={onlineEvents.length > 0 ? onlineEvents : events}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 15 }}
      />
    </View>
  );
}

const CARD_WIDTH = Dimensions.get("screen").width * 0.7; // ปรับให้กว้าง 70% ของหน้าจอ

const styles = StyleSheet.create({
  card: {
    marginRight: 15,
    width: CARD_WIDTH,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5, // Android shadow
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  infoRow: {
    flexDirection: "row",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dateBox: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  month: {
    fontSize: 16,
    color: "red", // เปลี่ยนเดือนเป็นสีแดง
    textAlign: "center",
    fontWeight: "600",
  },
  date: {
    color: "grey",
    textAlign: "center",
    fontSize: 18,
  },
  infoBox: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
  datetime: {
    color: "grey",
    fontSize: 13,
    marginTop: 3,
  },
  place: {
    color: "grey",
    fontSize: 13,
    marginTop: 2,
  },
});
