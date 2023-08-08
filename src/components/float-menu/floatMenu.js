import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default function FloatMenu(){
    return(
        <View style={styles.container}>
            <View style={styles.icons}>
                <TouchableOpacity style={styles.clicked}>
                    <Image style={styles.arrowIcon} source={require('../../assets/arrows.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.unclicked}>
                    <Image style={styles.moneyIcon} source={require('../../assets/money.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.unclicked}>
                    <Image style={styles.shopIcon} source={require('../../assets/shop.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 25,
        justifyContent: 'flex-end',
        alignSelf: 'center',
        backgroundColor: '#FFFFFFF2',
        padding: 10,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 50,
    },    
    icons:{
        width: "60%",
        flexDirection: 'row',        
    },
    
    clicked:{
        backgroundColor: "#8A05BE",
        width: 66, 
        height: 58, 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 30
    },
    unclicked:{
        backgroundColor: "#dedede", 
        width: 66, 
        height: 58, 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 30
    },
    moneyIcon:{
        width: 23,
        height: 23,
    },
    shopIcon:{
        width: 23,
        height: 23
    },
    arrowIcon:{
        width: 23,
        height: 23
    }})