import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { username, password });
            Alert.alert('Login Successful!');
            navigation.navigate('Dashboard');
        } catch (error) {
            Alert.alert('Login Failed!');
        }
    };

    return (
        <View>
            <TextInput placeholder="Username" onChangeText={setUsername} />
            <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default Login;
