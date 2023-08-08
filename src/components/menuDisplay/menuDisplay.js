import React from "react";
import Account from "./account/account";
import Options from "./options/options";
import { View, StyleSheet } from "react-native";
import Card from "./card/cards";
import Selections from "./selection/selections";

export default function Menu(){
    return(
        <View style={styles.container}>    
            <Account></Account>
            <Options></Options>
            <Card></Card>
            <Selections></Selections>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 20
    }
})