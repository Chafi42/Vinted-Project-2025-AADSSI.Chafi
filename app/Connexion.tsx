import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Back from '../components/back/back';


const Connexion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };



    return (
        <View style={styles.container}>
            <Back />

  <Text style={styles.textConnexion}>Connexion</Text>


            <TextInput
            style={[styles.input,styles.placeholder, styles.inputBorder]}
            placeholder="Écrivez votre adresse e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#A5A5A5"
            />
            <TextInput
            style={[styles.input, styles.inputBorder ]}
            placeholder="*********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry 
            placeholderTextColor="#A5A5A5"
            />
            <TouchableOpacity style={styles.buttonRegister} onPress={handleLogin}>
            <Text style={styles.signUpText}>Connexion</Text>
            </TouchableOpacity>
            <Text style={styles.smallUpText}>Mot de passe oublié ?</Text>
            <Text style={styles.smallUpText}>FAQ</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    placeholder: {
        color: '#A5A5A5' ,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#ffffff',
    },
    textConnexion: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    inputBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#A5A5A5', // Darker gray color
    },
    input: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 8,
    },
    buttonRegister: {
        backgroundColor: '#FF5A00',
        borderColor: '#FF5A00',
        borderWidth: 2,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 15,
        borderRadius: 25,
        marginTop: 40,
    },
    signUpText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    smallUpText: {
        color: '#FF5A00',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Connexion;