import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import { useFocusEffect, useNavigation, useRouter } from "expo-router";
import { Book } from "@/utils/types";
import {
  deleteBookDatabase,
  getBooksDatabase,
} from "@/utils/book-service";

export default function BookListScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();
  const navigation = useNavigation();

  const load = async () => {
    const data = await getBooksDatabase();
    setBooks(data);
  };

  // header title + back arrow
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "รายการหนังสือ",
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => router.replace("/")}
          style={{ marginLeft: 12 }}
        >
          <Text style={{ fontSize: 18 }}>←</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [])
  );

  const handleDelete = (id: string) => {
    Alert.alert("ลบหนังสือ", "คุณแน่ใจหรือไม่ที่จะลบรายการนี้?", [
      { text: "ยกเลิก", style: "cancel" },
      {
        text: "ลบ",
        style: "destructive",
        onPress: async () => {
          await deleteBookDatabase(id);
          load();
        },
      },
    ]);
  };

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/book-online/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.thumb} />

      <View style={styles.info}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.price}>{item.price} ฿</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() =>
              router.navigate({
                pathname: "/book-online/edit/[id]",
                params: { id: item.id },
              })
            }
          >
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => handleDelete(item.id)}
          >
            <Text style={styles.actionText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* top buttons */}
      <View style={styles.topActions}>
        <TouchableOpacity
          style={[styles.topBtn, styles.primaryBtn]}
          onPress={() => router.navigate("/book-online/create")}
        >
          <Text style={styles.topBtnText}>➕ เพิ่มหนังสือใหม่</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.topBtn, styles.favoriteBtn]}
          onPress={() => router.navigate("/book-online/favorites")}
        >
          <Text style={styles.topBtnText}>❤️ หนังสือที่ชอบ</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text>ยังไม่มีหนังสือในรายการ</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },

  /* top buttons */
  topActions: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
  },
  topBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryBtn: {
    backgroundColor: "#007AFF",
  },
  favoriteBtn: {
    backgroundColor: "#ff6f91",
  },
  topBtnText: {
    color: "#fff",
    fontWeight: "600",
  },

  /* card */
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 2,
  },
  thumb: {
    width: 80,
    height: 110,
    backgroundColor: "#f2f2f2",
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    marginTop: 4,
    color: "#2e7d32",
    fontWeight: "500",
  },

  actions: {
    flexDirection: "row",
    gap: 8,
  },
  editBtn: {
    flex: 1,
    backgroundColor: "#f0ad4e",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  deleteBtn: {
    flex: 1,
    backgroundColor: "#d9534f",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  empty: {
    marginTop: 40,
    alignItems: "center",
  },
});
