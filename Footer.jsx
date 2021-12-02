import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () =>{
    return(
        <View style={styles.footer_container}>
            <View>
                <Text>LOGO</Text>
            </View>
            <View style={styles.copyright}>
               <Text style={styles.copyright_cont}> {'\u00A9'}Copyright {new Date().getFullYear()}. Sosten All rights Reserved</Text>
            </View>
        </View>
    )
}
export default Footer;

const styles= StyleSheet.create({
    footer_container: {
        backgroundColor: "#5555",
        flex: 1,
        flexDirection: "row",
    },

    copyright: {
        backgroundColor: "#111",
        padding: 10,
    },

    copyright_cont: {
        fontSize: 14,
        color: "#ddd",
    },
})