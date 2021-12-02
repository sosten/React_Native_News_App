import React from "react";
import { View, Text,StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const News = () =>{
    return(
        <SafeAreaView style={styles.n_wrapper}>
            <View>
                <Icon name="newspaper" size={30} color="#900" />
                <Text>This is News section only for news content</Text>
            </View>
        </SafeAreaView>
    )
}
export default News;

const styles = StyleSheet.create({
    n_wrapper: {
        backgroundColor: "#5555",
        flex: 1,
        flexDirection: "row",
    }
})