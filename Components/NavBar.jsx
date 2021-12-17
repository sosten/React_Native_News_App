import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Octicons } from '@expo/vector-icons';

const NavBar = ({navigation}) =>{
    const [displayCont, setDisplayCont] = useState(false);

    // const displayHidden=()=>{
    //     if(displayCont === false){
    //         setDisplayCont(true)
    //         console.log('clicked');
    //     }
    // }
    return(
        <SafeAreaView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.nav_wrapper}>
                <Text onPress={()=>{displayCont===false ? setDisplayCont(true): setDisplayCont(!false)}}><Icon name="bars" size={25} style={{color:"#fff",}} />
                    <View style={{backgroundColor: "#fff", padding: 20,}}>
                        <Octicons name="search" size={24} color="black" />
                        <Text>Sports</Text>
                        <Text>Business</Text>
                        <Text>Lifestyle</Text>
                        <Text>Politics</Text>
                        <Text>Technology</Text>
                    </View>
                </Text>
                <Text style={styles.tin} onPress={()=>navigation.navigate('home')}>Tinveleko News</Text>
                <Text><Icon name="user" size={25} style={{color:"#fff",}} /></Text>
            </View>
        </SafeAreaView>
    )
}
export default NavBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#999",
        flexDirection:"row",
        marginTop: 25,
        alignItems:"center",
    },

    nav_wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#000",
        padding: 20,
        alignItems: "center",
        width: "100%",
    },

    tin: {
        fontSize: 26,
        fontWeight:"700",
        color: "#fff",
    },
});