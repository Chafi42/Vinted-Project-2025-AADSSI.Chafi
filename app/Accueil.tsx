import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header Image */}
            <Image
                source={require('../assets/images/accueil/vetements.jpg')} // Replace with actual image URI or use require('./path-to-local-image.png') if local
                style={styles.image}
            />
            
            {/* Description Text */}
            <Text style={styles.description}>
                Rejoins la tendance des articles d'occasion et vends sans commissions.
            </Text>
            
            <TouchableOpacity style={styles.buttonRegister}>
            <Link style={styles.signUpButton} href="/Inscription">
                <Text style={styles.signUpText}>Inscription</Text>
            </Link>
            </TouchableOpacity>

            <Link style={styles.loginButton} href="/Connexion">
                <Text style={styles.loginText}>Connexion</Text>
            </Link>

            {/* "Ignorer" Option */}
            <Link style={styles.ignoreText} href="/Magasin">
                <Text>Ignorer</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonRegister: {
        backgroundColor: '#FF5A00',
        borderColor: '#FF5A00',
        width: '100%',
        textAlign: 'center',
        borderRadius: 25,
        marginVertical: 20,
        
    },
    signUpText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
   
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 350, // Adjust as per the required dimensions
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: 'transparent', // Blue border
        marginVertical: 20,
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        color: '#333333',
        marginBottom: 30,
    },
    signUpButton: {
        borderColor: '#FF5A00',
        borderWidth: 2,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 15,
        paddingHorizontal: 40,
        
        borderRadius: 25,
        
    },
    loginButton: {
        borderColor: '#FF5A00',
        borderWidth: 2,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    loginText: {
        color: '#FF5A00',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ignoreText: {
        color: '#333333',
        fontSize: 14,
        position: 'absolute',
        top: 50,
        right: 20,
    },
});

export default SignUpScreen;
