import React from "react";
import { StyleSheet, View } from "react-native";

export default function Separator(){
    return(
        <View style={styles.container}></View>  
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 0.2,
        borderColor: "#F0F1F5"
    }
})