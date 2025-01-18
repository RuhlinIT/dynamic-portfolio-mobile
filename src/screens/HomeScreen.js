import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Portfolio App</Text>
            <Button title="Go to Projects" onPress={() => navigation.navigate('Projects')} />
        </View>
    );
};

export default HomeScreen;
