import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {

    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [desc, setDesc] = useState('');

    // ฟังก์ชันกดปุ่มคำนวณ BMI
    const onPressButton = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);

        if (!w || !h) return;

        let thisBMI = w / ((h / 100) ** 2);
        let bmiResult = thisBMI.toFixed(2);
        setBmi(bmiResult);

        // คำนวณเกณฑ์ผลลัพธ์
        let description = "";
        if (thisBMI < 18.5)
            description = "Underweight - eat a bagel!";
        else if (thisBMI >= 18.5 && thisBMI <= 24.99)
            description = "Normal - keep it up!";
        else if (thisBMI >= 25 && thisBMI <= 29.99)
            description = "Overweight - exercise more!";
        else if (thisBMI >= 30 && thisBMI <= 39.99)
            description = "Obese - get off the couch!";
        else
            description = "Morbidly Obese - take action!";

        setDesc(description);
    };

    return (
        <View style={{ padding: 20 }}>

            {/* แถวที่ 1 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text>Weight (kg.)</Text>
                <TextInput
                    value={weight}
                    keyboardType="numeric"
                    placeholder="Input your weight"
                    onChangeText={(text) => setWeight(text)}
                />
            </View>

            {/* แถวที่ 2 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text>Height (cm.)</Text>
                <TextInput
                    value={height}
                    keyboardType="numeric"
                    placeholder="Input your height"
                    onChangeText={(text) => setHeight(text)}
                />
            </View>

            {/* แถวที่ 3 แสดงผล BMI + คำอธิบาย */}
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>{bmi}</Text>
                </View>

                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginLeft: 10 }}>
                    <Text style={{ textAlign: "center" }}>{desc}</Text>
                </View>
            </View>

            {/* ปุ่มคำนวณ */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
