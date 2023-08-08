import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import SelectionComponent from "./selectionComponent";

const data = [
    {
        id: Math.random(),
        title:'Pix no Crédito:',
        text: 'transfira sem usar o saldo da conta',
    },
    {
        id: Math.random(),
        title:'Aumente seu limite do cartão',
        text: 'hoje com o Nu Limite garantido',
    },
    {
        id: Math.random(),
        title:'Convide amigos para o Nubank',
        text: 'e desbloqueie brasões incríveis',
    },
]
export default function Selections(){
    return(
        <SafeAreaView>
            <FlatList
            horizontal
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={(item) => <SelectionComponent text={item.item.text} title={item.item.title} {...item}/>}></FlatList>
        </SafeAreaView>
    )
}

// const styles= StyleSheet.create({
//     container:{
//         flexDirection: 
//     }
// })