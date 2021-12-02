import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Button, SafeAreaView, TouchableOpacity,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from "./Footer";
import NewsList from "./NewsList";

const itemSeparator = () => <View style={{height: 50}}></View>
const baseUrl = "./assets/images/"

const Index = ({navigation}) =>{
    return(
        <SafeAreaView style={{flex: 1, marginHorizontal: 20, alignItems: 'center', height: "100%"}}>
            <View style={styles.container}>
                <View style={styles.main_section}>
                    <FlatList
                        data={NewsList} 
                        ItemSeparatorComponent={itemSeparator}
                        renderItem={
                            ({item})=><TouchableOpacity key={item.id} onPress={()=>navigation.navigate('details',{ItemId: item.id})}>
                            <View style={styles.main_section_cont}>
                                <Image source={item.avator}  style={{height: 250, resizeMode: "contain", flex: 1, flexDirection: "column",}} alt={item.headline}/>
                                <View style={styles.main_section_cate_flex}>
                                    <Text style={styles.main_section_cate}>{item.category}</Text>
                                    <Text style={{fontSize: 15, color: "#111"}}>/ 1 hour ago</Text>
                                </View>
                                <Text style={styles.main_section_headline}>{item.headline}</Text>
                                <Text style={styles.details}>{item.content}</Text>
                                <Text style={styles.reporter}>By {item.reporter}</Text>
                            </View>
                            </TouchableOpacity>
                        }
                    />
                    <Footer />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    main_section: {
        display: "flex",
        flexDirection: "column",
        borderBottomColor: "#555",
    },

    main_section_cont: {
        backgroundColor: "#fff",
        padding: 10,
        borderBottomColor: "#555",
    },

    main_section_cate: {
        fontSize: 18,
        fontWeight: "500",
        paddingRight: 5,
    },

    main_section_cate_flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        paddingTop: 10,
        paddingBottom: 10,
    },

    main_section_headline: {
        fontSize: 16,
        fontWeight: "600",
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
export default Index;