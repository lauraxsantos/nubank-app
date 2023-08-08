import React from "react";
import { Text, View, StyleSheet, Image, FlatList, SafeAreaView } from "react-native";
import Options from "../options/options";

export default function Account(){
    return(
        <View style={styles.container}>
            <View style={styles.account}>
                <View>
                    <Text style={styles.text}>Conta</Text>
                    <Text style={styles.text}>R$ 1,356,98</Text>
                </View>
                    <Image style={styles.imageNext} source={require('../../../assets/next.png')}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    account:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 4 
    },
    imageNext:{
        width: 20,
        height: 20,
        marginRight: 15
    }, 
})

