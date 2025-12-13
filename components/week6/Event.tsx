
import { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";


export default function TourFlatList(props: any) {
    const tours = [
    { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg" , "month" : "DEC", "date" : "30", "datetime" : "Thu, DEC 30, 09.00 am" , "place" : "London" },
    { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg" , "month" : "DEC", "date" : "31", "datetime" : "Thu, DEC 30, 09.00 am", "place" : "Paris"},
    { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg" , "month" : "JAN", "date" : "01", "datetime" : "Thu, JAN 01, 09.00 am", "place" : "Canada"},
    { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg" , "month" : "JAN", "date" : "11", "datetime" : "Thu, JAN 11, 09.00 am", "place" : "USA"},
    { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg" , "month" : "JAN", "date" : "21", "datetime" : "Thu, JAN 21, 09.00 am", "place" : "Thailand"}
]

    const [onlineTours, setOnlineTours] = useState([]);

    const loadOnlineTours = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
            let data = await text.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
        useEffect(() => {
            loadOnlineTours();
        }, []);

    }

    return (
        
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Tour FlatList</Text>
            <Text style={{ color: "grey" }}>Let find out what most interesting things</Text>
            <FlatList
                //horizontal={true}
                horizontal={true}
                data={tours}
                // onlineTours 
                renderItem={
                    ({ item, index }: any) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginBottom: 10 }}>
                                <Image style={{ width: Dimensions.get("screen").width / 2.0 - 25, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ marginBottom: 10 }}>
                                <Text style={{ marginBottom: 10 }}>{item.title}</Text>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={(item: any) => item.id}
            />

        </View>
    );
}
