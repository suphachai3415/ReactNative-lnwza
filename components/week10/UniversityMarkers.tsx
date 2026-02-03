import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function UniversityMarkers(props:any) {

  return props.items.map((item:any) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.name}
      key={item.id.toString()}
      description={item.address}
    >
        <FontAwesome name="university" size={20} color="tomato" />
    </Marker>
  ));
}
