import Bmi from "@/components/week5/Bmi";
import Heartbeat from "@/components/week5/Heartbeat";
import { dismiss } from "expo-router/build/global-state/routing";
import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Health() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 , backgroundColor : 'lightblue', justifyContent : "center", padding : 20 }}>
            <Bmi  />
            <Heartbeat  />
        </View>
        </TouchableWithoutFeedback>
    );
}
