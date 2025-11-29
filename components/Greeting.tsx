import { Text, View } from "react-native";
export default function Greeting(props: any) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Hello world. {props.name}!</Text>
        </View>
    );
}
