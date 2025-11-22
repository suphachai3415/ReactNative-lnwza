import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Page2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ยินดีต้อนรับสู่หน้าจอที่ 2!</Text>
      <Text style={styles.subtitle}>นี่คือตัวอย่างหน้าจอ React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
});
