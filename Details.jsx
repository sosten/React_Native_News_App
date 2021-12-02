import React from "react";
import NewsList from "./NewsList";
import { View, Text, SafeAreaView, StyleSheet, Image} from "react-native";

const Details = ({route}) =>{
    const {ItemId} = route.params;
    return(
        <SafeAreaView style={styles.d_wrapper}>
            <View>
                {NewsList.filter((item)=> item.id === ItemId).map((item)=>{
                    return(
                        <View key={item.id}>
                            <Image source={item.avator} style={{height: 200, resizeMode: "contain"}}/>
                            <Text>{item.content}</Text>   
                        </View>
                    )
                })}
                <Text>Item id: {ItemId}</Text>
            </View>
        </SafeAreaView>
    )
}
export default Details;

const styles = StyleSheet.create({
    d_wrapper: {
        flex:1,
        flexDirection: "row",
    },
})