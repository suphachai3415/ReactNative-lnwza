import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';

const posts = [
    { id: 1, username: 'User 1', content: 'This is the first post.', image: 'https://picsum.photos/200' },
    { id: 2, username: 'User 2', content: 'Second post with an image!', image: 'https://picsum.photos/210' },
    { id: 3, username: 'User 3', content: 'Third post with an image!', image: 'https://picsum.photos/220' },
    { id: 4, username: 'User 4', content: 'Fouth post with an image!', image: 'https://picsum.photos/230' },
    // Add more posts here...
];

const Item = ({ item }: any) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100, resizeMode: 'cover' }} />}
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.username}</Text>
        <Text style={{ marginVertical: 5 }}>{item.content}</Text>
    </View>
);

const Item2 = ({ item }: any) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', flex: 1, paddingRight: 20 }}>
            {item.image && <Image source={{ uri: item.image }} style={{ flex: 1, resizeMode: 'cover', aspectRatio: 1 / 1 }} />}
        </View>
        <View style={{ flex: 3 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.username}</Text>
            <Text style={{ marginVertical: 5 }}>{item.content}</Text>
        </View>
    </View>
);

const Item3 = ({ item }: any) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'column', flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
            {item.image && <Image source={{ uri: item.image }} style={{ flex: 1, resizeMode: 'cover', aspectRatio: 1 / 1 }} />}
        </View>
        <View style={{ flex: 1, paddingTop: 10, alignItems: 'stretch', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.username}</Text>
            <Text style={{ marginVertical: 5 }}>{item.content}</Text>
        </View>
    </View>
);

const FlatListExample = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Item3 item={item} />}
                keyExtractor={(item: any) => item.id}
                numColumns={1}
                horizontal={false}
            />
            <Button title='Next' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});

export default FlatListExample;