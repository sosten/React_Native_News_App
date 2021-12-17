import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Spiner = () => {
    const [stopSpiner, setstopSpiner] = useState(true);
    
    const endSpinner=()=>{
        if(stopSpiner === true){
            setstopSpiner(false)
        }
    }

    setTimeout(() => {
        endSpinner();
    }, 2000);

    return (
        <View style={[ stopSpiner===true ? styles.container : styles.endSpiner]}>
            <ActivityIndicator color="red" size={50}/>
        </View>
    )
}

export default Spiner

 const styles = StyleSheet.create({
    container: {
        flex: 250,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#fff",
        // display: "none",
    },
    endSpiner: {
       display: "none",
    }, 
})