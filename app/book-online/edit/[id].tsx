// app/book/edit/[id].tsx
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// import { getBooks, updateBook } from "@/utils/book-storage";
import {
  getBookByIdDatabase,
  updateBookDatabase,
  uploadBookImage,
} from "@/utils/book-service";
import { Book } from "@/utils/types";

export default function EditBook() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [book, setBook] = useState<Book | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string>("https://picsum.photos/400/600");

  const navigation = useNavigation();
  useEffect(() => {
    const load = async () => {
      // const books = await getBooks();
      // const b = books.find(x => x.id === id) || null;
      const b = await getBookByIdDatabase(id || "");
      if (b) {
        setBook(b);
        setTitle(b.title);
        setDescription(b.description);
        setPrice(String(b.price));
        setImage(b.image);
        // set title
        navigation.setOptions({
          title: b?.title || "Edit Book",
        });
      }
    };
    load();
  }, [id]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "ต้องการสิทธิ์เข้าถึงรูปภาพ");
      return;
    }
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    if (!res.canceled) {
      setImage(res.assets[0].uri);
      // const uploadedUrl = await uploadBookImage(res.assets[0].uri);
      // setImage(uploadedUrl);
      // console.log("Uploaded image URL:", uploadedUrl);
    }
  };

  const handleUpdate = async () => {
    if (!book) return;
    if (!title.trim()) {
      Alert.alert("Validation", "กรุณากรอกชื่อหนังสือ");
      return;
    }
    const updated: Book = {
      ...book,
      title: title.trim(),
      description: description.trim(),
      price: Number(price) || 0,
      image,
    };
    await updateBookDatabase(id, updated);
    router.navigate(`/book-online/${book.id}`);
  };

  if (!book)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />

      <Text style={styles.label}>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 100 }]}
        multiline
      />

      <Text style={styles.label}>Price (฿)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Image</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Button title="Choose Image" onPress={pickImage} />

      <View style={{ height: 12 }} />
      <Button title="Update Book" onPress={handleUpdate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontWeight: "600", marginTop: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginTop: 6,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 6,
    marginVertical: 8,
    backgroundColor: "#eee",
  },
});