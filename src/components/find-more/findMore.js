import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import MoreComponent from "./findMoreComponent";

const foto1 = require('../../assets/foto1.png');

const data = [
    {
        id: Math.random(),
        image: foto1,
        title: "Parcele as compras no app",
        text: 'Descontos em compras à vista no crédito, controle total sobre seu dinheiro',
    },
    {
        id: Math.random(),
        title: 'Pix no crédito',
        text: 'Pague no Pix sem usar saldo da conta',
        image: foto1,
    },
    {
        id: Math.random(),
        title: 'Seguro de vida',
        text: 'Cuide de quem você ama de um jeito simples e que cabe no bolso',
        image: foto1,
    },
    {
        id: Math.random(),
        title: "Indique o Nu para amigos",
        text: 'Espalhe como é simples estar no controle',
        image: foto1,
    },
    {
        id: Math.random(),
        title: 'Portabilidade de salário',
        text: 'Liberdade é escolher onde receber seu dinheiro',
        image: foto1,
    },
    {
        id: Math.random(),
        title: "Termos de uso",
        text: 'Explicamos o que diz esse documento do Nubank',
        image: foto1,
    },
   
]
export default function More(){
    return(
        <View style={styles.container}>
           <View style={styles.row}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Descubra mais</Text>
                <Image style={styles.icon} source={require("../../assets/next.png")}></Image>
            </View>
            <FlatList
                horizontal
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={(item) => <MoreComponent title={item.item.title} text={item.item.text} image={item.item.image} {...item}/>}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({    
    container:{
        marginTop: 15,
        marginLeft: 20,
        marginBottom: 30,
    },
    icon:{
        width: 20,
        height: 20,
        marginRight: 15
    }, 
    row:{
        flexDirection: 'row', 
        justifyContent: 'space-between',  
        marginBottom: 19     
    },
})