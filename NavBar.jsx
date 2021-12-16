import React from "react";
import { View, Text, StyleSheet, SafeAreaView, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const NavBar = ({navigation}) =>{
    return(
        <SafeAreaView style={{backgroundColor: "#999", flexDirection:"row",  marginTop: 25, alignItems:"center"}} contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.nav_wrapper}>
                <Text><Icon name="bars" size={25} style={{color:"#fff",}} /></Text>
                <Text style={{fontSize: 26, fontWeight:"700", color: "#fff",}}>Tinveleko News</Text>
                <Text><Icon name="user" size={25} style={{color:"#fff",}} /></Text>
            </View>
        </SafeAreaView>
    )
}
export default NavBar;

const styles = StyleSheet.create({
    nav_wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#000",
        padding: 20,
        alignItems: "center",
        width: "100%",
    }
});