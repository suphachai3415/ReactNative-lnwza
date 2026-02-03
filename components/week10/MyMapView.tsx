import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import UniversityMarkers from "./UniversityMarkers";

export default function MyMapView(props: any) {
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;

    const [universities, setUniversities] = useState<any[]>([]);

    const loadUniversities = async () => {
        const url_endpoint =
            "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week10/universities.json";
        try {
            const response = await fetch(url_endpoint);
            const items = await response.json();
            setUniversities(items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadUniversities();
    }, []);

    if (!props.location || !props.location.coords) {
        return <MapView style={{ width, height }} />;
    }

    const postData = async (url: string, data: any) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("SERVER RESPONSE:", result);
        } catch (error) {
            console.log("POST ERROR:", error);
        }
    };


    return (
        <MapView
            style={{ width, height }}
            initialRegion={{
                latitude: props.location.coords.latitude,
                longitude: props.location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            showsUserLocation={true}
            onUserLocationChange={(event) => {
                const coord = event.nativeEvent.coordinate;
                if (!coord) return;

                const new_location = {
                    coords: coord,
                    mocked: false,
                    timestamp: Date.now(),
                };

                props.setLocation(new_location);

                // SEND TO SERVER
                postData("https://ckartisan.com/api/location", {
                    user_id: "Suphachai",
                    latitude: coord.latitude,
                    longitude: coord.longitude,
                });
            }}

        >
            <UniversityMarkers items={universities} />
        </MapView>
    );
}
