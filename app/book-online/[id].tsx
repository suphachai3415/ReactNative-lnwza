// app/book/[id].tsx
import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, Alert, StyleSheet } from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
// import { getBooks, deleteBook } from "@/utils/book-storage";
import { Book } from "@/utils/types";
import { deleteBookDatabase, getBookByIdDatabase } from "@/utils/book-service";
import { addFavorite } from "@/utils/favorite-service";


export default function BookDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    const load = async () => {
      // const books = await getBooks();
      // const b = books.find((x) => x.id === id) || null;
      const b = await getBookByIdDatabase(id || "");
      setBook(b);
      // set title
      navigation.setOptions({
        title: b?.title || "รายละเอียดหนังสือ",
      });
    };
    load();
  }, [id]);

  const handleDelete = () => {
    if (!book) return;
    Alert.alert("ลบหนังสือ", "ยืนยันการลบรายการนี้?", [
      { text: "ยกเลิก", style: "cancel" },
      {
        text: "ลบ",
        style: "destructive",
        onPress: async () => {
          await deleteBookDatabase(book.id);
          router.navigate("/book-online"); // กลับไปหน้า list
        },
      },
    ]);
  };

  if (!book)
    return (
      <View style={styles.center}>
        <Text>ไม่พบหนังสือนี้</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.image }} style={styles.image} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.price}>{book.price} ฿</Text>
      <Text style={styles.desc}>{book.description}</Text>
      <View style={{ marginTop: 16 }}>
        <Button
          title="แก้ไข"
          onPress={() =>
            router.navigate({
              pathname: "/book-online/edit/[id]",
              params: { id: book.id },
            })
          }
        />
        <View style={{ height: 8 }} />
        <Button title="ลบ" color="#d9534f" onPress={handleDelete} />
        <Button
          title="❤️ เพิ่มเป็นรายการโปรด"
          onPress={async () => {
            try {
              await addFavorite(book.id);
              Alert.alert("สำเร็จ", "เพิ่มในรายการโปรดแล้ว");
            } catch (e) {
              Alert.alert("ผิดพลาด", "ไม่สามารถเพิ่มรายการโปรดได้");
            }
          }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { flex: 1, padding: 16 },
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  title: { fontSize: 22, fontWeight: "700", marginTop: 12 },
  price: { color: "#1a8917", marginTop: 8, fontSize: 16 },
  desc: { marginTop: 12, fontSize: 14, color: "#333" },
});