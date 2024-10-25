import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Svg = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <Ionicons name="notifications-outline" size={24} color="black" />
                <Ionicons name="cart-outline" size={24} color="black" />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        padding: 16,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60,
    },
});

export default Svg;
