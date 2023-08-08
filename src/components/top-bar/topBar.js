import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Image} from 'react-native'

export default function TopBar(){
    return (
        <View style={styles.container}>
            <View style={styles.topIcons}>
                <View style={styles.profile}>
                    <Image style={styles.iconPerson} source={require('../../assets/do-utilizador.png')}></Image>
                </View>
                <View style={styles.icons}>
                    <Image style={styles.iconEye} source={require('../../assets/visualizar.png')}></Image>
                    <Image style={styles.iconHelp} source={require('../../assets/ajuda.png')}></Image>
                    <Image style={styles.iconPic} source={require('../../assets/o-email.png')}></Image>
                </View>
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>Olá, Ana Laura</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "14%",
        width: "100%",
        backgroundColor: '#800AD0'
    },
    textView:{
        marginTop: 30,
        marginLeft: 25,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white'
    },
    topIcons:{
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 25,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icons:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '35%',
        justifyContent: 'space-between'
    },
    profile:{
        backgroundColor: '#9B03FE',
        padding: 14,
        borderRadius: 30
    },
    iconEye:{
        height: 25,
        width: 35,
    },
    iconHelp:{
        height: 25,
        width: 25,
    },
    iconPerson:{
        height: 16,
        width: 16,
    },
    iconPic:{
        height: 22,
        width: 22,
    }
})