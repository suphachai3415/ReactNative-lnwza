// app/book/create.tsx
import * as ImagePicker from "expo-image-picker";
import { useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
// import { addBook } from "@/utils/book-storage";
import { addBookDatabase } from "@/utils/book-service";
import { Book } from "@/utils/types";

export default function CreateBook() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string>("https://picsum.photos/400/600"); // default placeholder
  const router = useRouter();
  const navigation = useNavigation();

  // set title for the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: "เพิ่มหนังสือใหม่" });
  }, [navigation]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "ต้องการสิทธิ์เข้าถึงรูปภาพ");
      return;
    }
    const res = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.Images,
      mediaTypes: ['images'],
      quality: 0.7,
      base64: false, // change to false to get uri
    });
    if (!res.canceled) {
      
      setImage(res.assets[0].uri);

      // const uploadedUrl = await uploadBookImage(res.assets[0].uri);
      // setImage(uploadedUrl);
      // console.log("Uploaded image URL:", uploadedUrl);
    }else{
      Alert.alert("Cancelled", "คุณไม่ได้เลือกรูปภาพ หรือ error เกิดขึ้น");
    }
  };

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert("Validation", "กรุณากรอกชื่อหนังสือ");
      return;
    }
    const book: Book = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      price: Number(price) || 0,
      image,
    };
    await addBookDatabase(book);
    router.navigate("/book-online"); // กลับไปหน้า list
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder="Title" />

      <Text style={styles.label}>Description</Text>
      <TextInput value={description} onChangeText={setDescription} style={[styles.input, { height: 100 }]} multiline />

      <Text style={styles.label}>Price (฿)</Text>
      <TextInput value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />

      <Text style={styles.label}>Image</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Button title="Choose Image" onPress={pickImage} />

      <View style={{ height: 12 }} />
      <Button title="Save Book" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontWeight: "600", marginTop: 12 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 8, marginTop: 6 },
  image: { width: "100%", height: 220, borderRadius: 6, marginVertical: 8, backgroundColor: "#eee" },
});