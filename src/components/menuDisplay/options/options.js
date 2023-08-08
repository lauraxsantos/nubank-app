import React from "react";
import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";
import OptionComponent from "./optionComponent";

const dataOptions = [
    {
        id: Math.random(),
        image: require('../../../assets/pix.png'),
        text: 'Área Pix',
    },
    {
        id: Math.random(),
        image: require('../../../assets/barCode.png'),
        text: 'Pagar',
    },
    {
        id: Math.random(),
        image: require('../../../assets/dar-dinheiro.png'),
        text: 'Pegar emprestado',
    },
    {
        id: Math.random(),
        image: require('../../../assets/transferir-dinheiro.png'),
        text: 'Transferir',
    },
    {
        id: Math.random(),
        image: require('../../../assets/iphone.png'),
        text: 'Recarga de celular',
    },
    {
        id: Math.random(),
        image: require('../../../assets/cobrar.png'),
        text: 'Cobrar',
    },
    {
        id: Math.random(),
        image: require('../../../assets/stocks.png'),
        text: 'Investir',
    },
    {
        id: Math.random(),
        image: require('../../../assets/depositar.png'),
        text: 'Depositar',
    }
]

export default function Options(){
    return(
        <SafeAreaView>
                <FlatList 
                    horizontal
                    keyExtractor={(item) => item.id} 
                    data={dataOptions} 
                    renderItem={(item) => <OptionComponent image={item.item.image} name={item.item.text} {...item}/>}></FlatList>
            </SafeAreaView>
    )
}
