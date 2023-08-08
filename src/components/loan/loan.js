import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Loan(){
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Empréstimo</Text>
                <Image style={styles.icon} source={require("../../assets/next.png")}></Image>
            </View>
            <Text style={styles.text}>Valor disponível de até </Text>
            <Text style={styles.text}>R$ 2.000,00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        marginLeft: 20,
        marginBottom: 30
    },
    row:{
        flexDirection: 'row', 
        justifyContent: 'space-between',  
        marginBottom: 10  
    },
    icon:{
        width: 20,
        height: 20,
        marginRight: 15
    },
    text:{
        color:'#848389',
        fontWeight: '600'
    }
})