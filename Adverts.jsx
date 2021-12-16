import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Adverts = () =>{
    return(
        <View>
            {/* <Text style={styles.advert}>Advertisment</Text> */}
                {/* <View style={styles.advert_img}>
                    <Image source={require("./assets/images/kikz.webp")} style={{width: "100%", height: 100}} />
                </View> */}
        </View>
    )
}
export default Adverts;

const styles = StyleSheet.create({
    advert: {
        textAlign: 'center',
        padding: 30,
        flexDirection: 'row',
    },
    advert_img: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
})