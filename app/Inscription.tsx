import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Back from '../components/back/back';

const Inscription = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);

    const handleSignUp = () => {
        if (!pseudo || !email || !phone || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate an API call
        fetch('https://example.com/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pseudo, email, phone, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Sign up successful');
            } else {
                alert('Sign up failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    };


    return (
        <View style={styles.container}>
            <Text style={styles.textRegister}>Inscription</Text>
          
            {/* Components  */}
            <Back />
            {/* Fin des components */}
    

    {/* Champs à remplir */}
            <TextInput
                style={styles.input}
                placeholder="Pseudo"
                value={pseudo}
                onChangeText={setPseudo}
                keyboardType="default"
                autoCapitalize="none"
                placeholderTextColor="#A5A5A5"
            />
            <Text style={styles.instructionText}>
                Crée ton nom d'utilisateur en n'utilisant que des lettres et des chiffres.
                Choisis en un qui te plaît, tu ne pourras plus le changer.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#A5A5A5"
            />
            <Text style={styles.instructionText}>
                Entrez une adresse e-mail valide.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Téléphone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#A5A5A5"
            />
            <Text style={styles.instructionText}>
                Entrez un numéro de téléphone valide.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#A5A5A5"
            />
            <Text style={styles.instructionText}>
                Crée un mot de passe sécurisé d'au moins 8 caractères.
            </Text>
            {/* Fin des champs à remplir */}

            {/* Checkbox */}
            <TouchableOpacity onPress={() => setChecked(!isChecked)} style={styles.checkboxContainer}>
                <View style={[styles.checkbox, isChecked && styles.checked]}>
                    {isChecked && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxText}>
                En vous inscrivant, vous acceptez les <Text style={styles.termsAndConditions}>Conditions d'utilisation</Text> et la  
                    <Text style={styles.termsAndConditions}> Politique de confidentialité</Text>
                </Text>
            </TouchableOpacity>

            {/* Button */}
            <TouchableOpacity style={styles.buttonRegister} onPress={handleSignUp}>
                <Text style={styles.signUpText}>Inscription</Text>
            </TouchableOpacity>

            <Text style={styles.accountExisting}>
            Ou <Text style={styles.login}>connectez-vous</Text> si vous avez un compte
            </Text>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        paddingHorizontal: 20,
        paddingTop: 50,
    },

    accountExisting: {
        color: '#A5A5A5',
        textAlign: 'center',
        marginTop: 50,
    },

    login: {
        color: '#FF5A00',
    },

    termsAndConditions: {
        color: '#FF5A00',
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#A5A5A5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    checkboxText: {
        flex: 1,
        color: '#A5A5A5',
        fontSize: 12,
        marginRight: 0,
    },

    checked: {
        backgroundColor: '#FF5A00',
    },

    checkmark: {
        color: '#ffffff',
    },


    textRegister: {
        fontSize: 24,
        marginBottom: 50,
        textAlign: 'center',
    },

    input: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#A5A5A5',
    },
    instructionText: {
        color: '#A5A5A5',
        fontSize: 12,
        marginBottom: 20,
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
});

export default Inscription;
