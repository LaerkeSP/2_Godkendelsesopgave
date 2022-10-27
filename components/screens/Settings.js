//Importerer nødvendige libraries
import React, {useEffect, useState} from "react";
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import firebase from "firebase/compat";
//import { firebase } from '@react-native-firebase/database';
import { db } from "../../firebase-config";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import {createStackNavigator} from "@react-navigation/stack";
import DataScreen from "./Data";
import EditScreen from "./Edit";

function SettingsScreen({route, navigation}) {
    const Stack = createStackNavigator();


    return (
        <Stack.Navigator
            screenOptions = {{
                headerShown: false
            }}
        >
            <Stack.Screen name='data' component={DataScreen} />
            <Stack.Screen name='edit' component={EditScreen} />
        </Stack.Navigator>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightcyan',
    },
    text: {
        fontSize: 20,
        margin: 20
    },
});