import React from "react";
import NewsList from "../NewsList";
import { Entypo } from '@expo/vector-icons';
import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground,ScrollView, Dimensions} from "react-native";

const Details = ({route, navigation}) =>{
    const {ItemId} = route.params;
    return(
        <SafeAreaView style={styles.d_wrapper}>
            <Entypo name="chevron-thin-left" size={26} color="red" style={styles.back_btn} onPress={()=>navigation.navigate('home')}/>
            <View style={{flex: 1,}}>
                {NewsList.filter((item)=> item.id === ItemId).map((item)=>{
                    return(
                        <View key={item.id} style={{ flex: 1}}>
                            <ScrollView style={{ flex: 1 }}> 
                                <View  style={{height: Dimensions.get('screen').height,}}>
                                    <View style={styles.d_image}>
                                        <ImageBackground  source={item.avator} style={styles.d_bg} />
                                    </View>
                                    <View style={styles.d_heading}>
                                        <Text style={styles.d_cate}># {item.category}</Text>
                                        <Text style={{fontSize: 24, fontWeight: "700",}}>{item.headline}</Text>
                                    </View>
                                    <View style={styles.d_cont}>
                                        <Text style={{fontSize: 18,lineHeight: 25, color: "#111",}}>{item.content}</Text>   
                                    </View>
                                    <View>
                                        <Text style={styles.d_reporter}>{item.reporter}</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    )
                })}
            </View>  
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
        resizeMode: "contain",
        flex: 1,
    },

    back_btn: {
        width: '100%',
        flexDirection: 'row',
        zIndex:100,
        position: "absolute",
        paddingRight: 10,
        paddingLeft: 16,
        paddingTop: 20,
        paddingBottom: 20,
    },

    d_image: {
        flexGrow:1,
        justifyContent: "center",
        height: "50%",
    },

    d_heading: {
        padding: 20,
        alignItems: "flex-start",
        
    },

    d_cate: {
        color: "#999",
        fontSize: 20,
    },

    d_cont: {
        fontSize: 20,
        alignItems: "flex-start",
        padding: 20,
    },

    d_reporter: {
        backgroundColor: "#5555",
        padding: 20,
    },
})