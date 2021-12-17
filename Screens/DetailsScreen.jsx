import React from "react";
import NewsList from "../NewsList";
import { Entypo } from '@expo/vector-icons';
import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground,ScrollView, Dimensions} from "react-native";

const Details = ({route, navigation}) =>{
    const {ItemId} = route.params;
    return(
        <SafeAreaView style={styles.d_wrapper} >
            <ScrollView style={{height: "100%", flex: 1}} contentContainerStyle={{ flex: 1, paddingVertical:20 }} nestedScrollEnabled={true} scrollEnabled={true}>
                <View style={{flex: 1}}>
                    {NewsList.filter((item)=> item.id === ItemId).map((item)=>{
                        return( 
                            <View key={item.id} style={{height: Dimensions.get('screen').height,}}>
                                <Entypo name="chevron-thin-left" size={26} color="red" style={styles.back_btn} onPress={()=>navigation.navigate('home')}/>
                                <View style={styles.d_image}>
                                    <ImageBackground  source={item.avator} style={styles.d_bg} />
                                </View>
                                <View style={styles.d_heading}>
                                    <Text style={{fontSize: 20, fontWeight: "700",}}>{item.headline}</Text>
                                </View>
                                <View style={styles.d_cont}>
                                    <Text style={{fontSize: 16, color: "#111",}}>{item.content}</Text>   
                                </View>
                                <View>
                                    <Text>{item.reporter}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>  
            </ScrollView>
        </SafeAreaView>
    )
}
export default Details;

const styles = StyleSheet.create({
    d_wrapper: {
        flex: 1,
        height: Dimensions.get('screen').height,
    },

    d_bg: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        flex: 1,
        marginTop: -40,
    },

    back_btn: {
        // backgroundColor: '#5555',
        width: '100%',
        flexDirection: 'row',
        zIndex:100,
        marginTop: -25,
        paddingRight: 10,
        paddingLeft: 16,
        paddingTop: 20,
        paddingBottom: 20,
    },

    d_image: {
        flexGrow:1,
        justifyContent: "center",
        marginTop: -25,
        backgroundColor: "rgba(0,0,0,0.9)",
        height: "50%",
    },

    d_heading: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        
    },

    d_cont: {
        alignItems: "center",
        flexDirection: "column",
        flexGrow: 1,
        padding: 20,
    },
})