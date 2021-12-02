import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Adverts = () =>{
    return(
        <View>
            <Text style={styles.advert}>Advertisment</Text>
        </View>
    )
}
export default Adverts;

const styles = StyleSheet.create({
    advert: {
        textAlign: 'center',
        padding: 30,
        flexDirection: 'row',
    }
})