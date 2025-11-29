import Card from '@/components/week3/Card';
import Hotel from '@/components/week3/Hotel';
import Menu from '@/components/week3/Menu';
import Signup from '@/components/week3/Signup';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';



export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <Text>Text of Week 3 </Text>
                <Menu />
                <Card />
                <Hotel />
                <Signup />
            </View>
        </ScrollView>
    );
}
