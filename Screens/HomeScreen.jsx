import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Button, SafeAreaView, TouchableOpacity,} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from "../Components/Footer";
import NewsList from "../NewsList";

const itemSeparator = () => <View style={{height: 10,}}></View>

const HomeScreen= ({navigation}) =>{
    return(
        <SafeAreaView style={{flex: 1, marginHorizontal: 20, alignItems: 'center', height: "100%"}}>
            <View style={styles.main_section}>
                <FlatList
                    data={NewsList} 
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={
                        ({item})=><TouchableOpacity key={item.id} onPress={()=>navigation.navigate('details',{ItemId: item.id})}>
                        <View style={styles.main_section_cont}>
                            <View style={{justifyContent: "center", alignItems: "center",}}>
                                <Image source={item.avator}  style={styles.main_section_img} alt={item.headline}/>
                            </View>
                            <View style={styles.main_section_cate_flex}>
                                <View style={{flexDirection:"row", paddingTop: 10, paddingBottom: 10,}}>
                                    <Text style={styles.main_section_cate}>{item.category}</Text>
                                    <Text style={{fontSize: 15, color: "#888",}}> <Icon name="clock"/> 1 hour ago</Text>
                                </View>
                                <Text style={styles.main_section_headline} numberOfLines={3} ellipsizeMode="tail">{item.headline}</Text>
                                <Text style={styles.reporter}>By {item.reporter}</Text>
                            </View>
                            
                        </View>
                        </TouchableOpacity>
                    }
                />
                <Footer />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    main_section: {
        flexDirection: "column",
        borderBottomColor: "#555",
    },

    main_section_img: {
        height: 150,
        width: 120,
        resizeMode: "contain",
        flex: 1, 
        flexDirection: "column",
        marginRight: 10,
    },

    main_section_cont: {
        backgroundColor: "#fff",
        padding: 10,
        borderBottomColor: "#555",
        borderRadius: 5,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        width: "100%",
    },

    main_section_cate: {
        fontSize: 14,
        fontWeight: "700",
        color: "red",
        flex: 1,
    },

    main_section_cate_flex: {
        flex: 1,
    },

    main_section_headline: {
        fontSize: 16,
        fontWeight: "700",
        color: "#111",
        paddingBottom: 10,
    },

    details: {
        color: "#111",
        fontSize: 16,
        paddingBottom: 10,
    },

    reporter: {
        fontSize: 14,
        color: "#333",
    },
})
export default HomeScreen;