import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  StyleSheet,
  ScrollView, // เพิ่ม ScrollView สำหรับกรณีคำอธิบายยาว
} from "react-native";
import {
  useLocalSearchParams,
  useNavigation,
  useRouter,
  Link,
} from "expo-router";
import { getBooks, deleteBook } from "@/utils/book-storage";
import { Book } from "@/utils/types";

export default function BookDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    const load = async () => {
      const books = await getBooks();
      const b = books.find((x) => x.id === id) || null;
      setBook(b);

      // ตั้งค่า Title บน Header
      navigation.setOptions({
        title: b?.title || "รายละเอียดหนังสือ",
      });
    };

    load();
  }, [id, navigation]);

  const handleDelete = () => {
    if (!book) return;

    Alert.alert("ลบหนังสือ", "ยืนยันการลบรายการนี้?", [
      { text: "ยกเลิก", style: "cancel" },
      {
        text: "ลบ",
        style: "destructive",
        onPress: async () => {
          await deleteBook(book.id);
          // ✅ กลับหน้าแรก (List) โดยการ Replace เพื่อไม่ให้ย้อนกลับมาหน้านี้ได้อีก
          router.replace("/"); 
        },
      },
    ]);
  };

  if (!book) {
    return (
      <View style={styles.center}>
        <Text>ไม่พบข้อมูลหนังสือ</Text>
        <Button title="กลับหน้าหลัก" onPress={() => router.replace("/")} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: book.image }} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.price}>{book.price.toLocaleString()} ฿</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.label}>รายละเอียด:</Text>
        <Text style={styles.desc}>{book.description || "ไม่มีคำอธิบาย"}</Text>

        <View style={styles.buttonContainer}>
          {/* ✅ ใช้ href แบบ string ตรงๆ เพื่อเลี่ยงปัญหา Typed Route */}
          <Link href={`/book/edit/${book.id}` as any} asChild>
            <Button title="แก้ไขข้อมูล" />
          </Link>

          <View style={{ height: 12 }} />

          <Button title="ลบหนังสือ" color="#d9534f" onPress={handleDelete} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  container: { flex: 1, backgroundColor: "#fff" },
  image: {
    width: "100%",
    height: 350,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    color: "#1a8917",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
  },
  desc: {
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 40,
  },
});