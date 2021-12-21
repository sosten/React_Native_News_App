import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SportsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Sports Screen</Text>
        </View>
    )
}

export default SportsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})