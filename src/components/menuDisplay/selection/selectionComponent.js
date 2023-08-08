import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export default function SelectionComponent({title, text}){
    return(
        <View style={styles.container}>
            <Text style={{color:"#830AD1",  maxWidth: 220}}>{title + " "}<Text style={{color: "black"}}>{text}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 19,
        backgroundColor: "#F0F1F5",
        borderRadius: 10,
        maxWidth: "95%",
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 25,
        paddingRight: 34,
        marginBottom: 30
    }
})