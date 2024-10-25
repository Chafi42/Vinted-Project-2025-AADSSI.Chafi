import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoaderScreen = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const navigation = useNavigation();

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate('Accueil');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>En cours sur VM</Text>
            <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5A00', // The orange background color
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 10,
    },
    loader: {
        marginTop: 10,
    },
});

export default LoaderScreen;