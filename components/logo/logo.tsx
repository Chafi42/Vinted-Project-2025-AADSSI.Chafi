import { Image, View, StyleSheet } from 'react-native';
import React from 'react';

const Logo = () => (
    <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../../assets/logo/logo.png')}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 32,
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default Logo;