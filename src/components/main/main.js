import React from "react";
import TopBar from "../top-bar/topBar";
import FloatMenu from "../float-menu/floatMenu";
import Menu from "../menuDisplay/menuDisplay";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import Separator from "../separator/separator";
import Loan from "../loan/loan";
import CreditCard from "../credit-card/creditCard";
import More from "../find-more/findMore";


export default function Main(){
    return(          
            <View>
                <ScrollView>
                    <TopBar></TopBar>
                    <Menu></Menu>
                    <Separator></Separator>
                    <CreditCard></CreditCard>
                    <Separator></Separator>
                    <Loan></Loan>
                    <Separator></Separator>
                    <More></More>
                </ScrollView>        
                    <FloatMenu></FloatMenu>
            </View>        
    )
}

