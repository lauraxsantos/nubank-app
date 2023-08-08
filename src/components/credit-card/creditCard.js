import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CreditCard(){
    return(
        <View style={styles.container}>            
            <View style={styles.row}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Cartão de crédito</Text>
                <Image style={styles.icon} source={require("../../assets/next.png")}></Image>
            </View>
            <Text style={{color: "#848389", fontWeight: 'bold', marginBottom: 7}}>Fatura atual</Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 1}}>R$ 250,00</Text>
            <Text style={{color: "#848389", fontSize: 12, marginBottom: 23}}>Limite disponível de R$ 2.678,00</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={{padding: 3, textAlign: 'center'}}>Parcelar compras</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        marginLeft: 20,
        marginBottom: 30
    },
    icon:{
        width: 20,
        height: 20,
        marginRight: 15
    }, 
    row:{
        flexDirection: 'row', 
        justifyContent: 'space-between',  
        marginBottom: 10     
    },
    btn:{
        backgroundColor: '#F0F1F5',
        borderRadius: 25,
        width: 130
    }
})