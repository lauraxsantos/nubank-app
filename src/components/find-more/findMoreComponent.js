import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function MoreComponent({text, title, image}){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.image} source={image}></Image>
                <View style={styles.textArea}>
                    <Text style={{width: 192, fontWeight: 'bold', marginBottom: 10}}>{title}</Text>
                    <Text numberOfLines={2} style={{width: 210, color: '#696A6E', fontWeight: "500", fontSize: 15}}>{text}</Text>
                </View>
                    <Text style={styles.btn}>Conhecer</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({    
    container:{
        width: 260,        
        backgroundColor: '#F0F1F5',
        borderRadius:15,
        marginRight: 30,
        marginBottom: 15
    },
    image:{
        width: 260,
        height: 90,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }, 
    textArea:{
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 15,
    },
    btn:{
        backgroundColor: '#800AD0', 
        color: '#F0F1F5', 
        width: 65, 
        textAlign: 'center',
        borderRadius: 15,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 12, 
        marginLeft: 15,
        marginBottom: 15

    }
   
})