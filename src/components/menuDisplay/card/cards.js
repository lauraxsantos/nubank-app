import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Card(){
    return(
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../../../assets/cartão.png')}></Image>
            <Text style={{fontWeight: 'bold'}}>Meus cartões</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F0F1F5",
        width: '95%',
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        padding: 15,
        borderRadius: 10
    },
    icon:{
        marginRight: 15,
        marginLeft: 5,
        width: 25,
        height: 25
    }
})