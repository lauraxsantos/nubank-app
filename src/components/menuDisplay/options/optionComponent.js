import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function OptionComponent({image, name}){
    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={styles.icon} source={image}></Image>
            </View>
            <Text style={{fontWeight:  'bold', marginTop: 4, textAlign: 'center'}}>{name}</Text>
        </View>        
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 25,
        width: 85,
    },
    image:{
        backgroundColor: '#F0F1F5',
        padding: 20,
        borderRadius: 50
    },
    icon:{
        height: 22,
        width: 22,
    }
})