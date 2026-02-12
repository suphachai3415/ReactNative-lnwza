import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useFocusEffect, useNavigation, useRouter, Link } from "expo-router";
import { getBooks, deleteBook } from "@/utils/book-storage";
import { Book } from "@/utils/types";

export default function BookListScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const navigation = useNavigation();
  const router = useRouter();

  const load = async () => {
    const data = await getBooks();
    setBooks(data);
  };
  useFocusEffect(
    useCallback(() => {
      load();
    }, [])
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: "รายการหนังสือ" });
  }, [navigation]);


  const handleDelete = (id: string) => {
    Alert.alert("ลบหนังสือ", "คุณแน่ใจหรือไม่?", [
      { text: "ยกเลิก", style: "cancel" },
      {
        text: "ลบ",
        style: "destructive",
        onPress: async () => {
          await deleteBook(id);
          load();
        },
      },
    ]);
  };

  const renderItem = ({ item }: { item: Book }) => (
    <Pressable
      style={styles.item}
      onPress={() => router.push(`/book/${item.id}`)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.thumb}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>{item.price} ฿</Text>

        <View style={styles.actions}>
          <Pressable
            style={styles.editBtn}
            onPress={() => router.push(`/book/edit/${item.id}`)}
          >
            <Text style={styles.btnText}>Edit</Text>
          </Pressable>

          <Pressable
            style={styles.deleteBtn}
            onPress={() => handleDelete(item.id)}
          >
            <Text style={styles.btnText}>Delete</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Link href="/book/create" asChild>
        <Pressable style={styles.addBtn}>
          <Text style={styles.addText}>+ เพิ่มหนังสือใหม่</Text>
        </Pressable>
      </Link>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text>ยังไม่มีหนังสือในรายการ</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  addBtn: {
    margin: 16,
    padding: 12,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    alignItems: "center",
  },
  addText: { color: "#fff", fontWeight: "600" },

  item: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    overflow: "hidden",
  },

  thumb: { width: 70, height: 90 },

  info: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },

  title: { fontSize: 15, fontWeight: "600" },
  price: { fontSize: 14, color: "#2e7d32", marginTop: 4 },

  actions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },

  editBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#eee",
    borderRadius: 6,
  },

  deleteBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#f44336",
    borderRadius: 6,
  },

  btnText: { color: "#fff", fontSize: 13 },

  empty: { marginTop: 40, alignItems: "center" },
});
