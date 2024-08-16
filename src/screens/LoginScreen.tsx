import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput } from '@src/components/CustomInput';
import { CustomButton } from '@src/components/CustomButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/routes/types';
import axios from 'axios';

const LoginScreen: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const login = () =>{
        axios.get("http://localhost:3333/user/login").then(response => {

        }).catch(error => {
            alert(error)
        });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <CustomInput
                label="Login:"
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Digite seu usuário ou email"
            />
            <CustomInput
                label="Senha:"
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                secureTextEntry
            />
            <CustomButton
                title="Login"
                onPress={login}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        width: '100%',
        backgroundColor: '#1E1E1E'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export { LoginScreen };
