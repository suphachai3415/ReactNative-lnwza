import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getFavorites } from "@/utils/favorite-service";
import { Button, Alert } from "react-native";
import { removeFavorite } from "@/utils/favorite-service";


export default function FavoriteScreen() {
    const [favorites, setFavorites] = useState<any[]>([]);

    useEffect(() => {
        getFavorites().then(setFavorites);
    }, []);

    return (
        <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Image source={{ uri: item.books.image }} style={styles.img} />
                    <Text>{item.books.title}</Text>
                    <Text>{item.books.price} ฿</Text>

                    <Button
                        title="❌ ลบออก"
                        onPress={async () => {
                            try {
                                await removeFavorite(item.id);

                                // ลบออกจาก state ทันที
                                setFavorites((prev) =>
                                    prev.filter((f) => f.id !== item.id)
                                );

                                Alert.alert("ลบสำเร็จ");
                            } catch (e) {
                                Alert.alert("เกิดข้อผิดพลาด");
                            }
                        }}
                    />
                </View>
            )}

        />
    );
}

const styles = StyleSheet.create({
    item: { padding: 12, borderBottomWidth: 1 },
    img: { width: 60, height: 80 },
});
