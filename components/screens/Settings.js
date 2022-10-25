//Importerer nødvendige libraries
import React, {useEffect, useState} from "react";
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
//import firebase from "firebase/compat";
import { firebase } from '@react-native-firebase/database';

function SettingsScreen({route, navigation}) {
    const reference = firebase
        .app()
        .database('https://godkendelsesopgave-af286-default-rtdb.europe-west1.firebasedatabase.app/')
        .ref('/User');

    reference()
        .ref('/users/123')
        .once('value')
        .then(snapshot => {
            console.log('User data: ', snapshot.val());
        });


    /*
    const [email] = firebase.auth().currentUser.email;
    const [users, setUsers] = useState({});

    useEffect(() => {
        setUsers(route.params.User[1]);

        return () => {
            setUsers({})
        }
    });

    if (!users){
        return(
            <Text>
                No user - et eller andet er gået helt galt
            </Text>
        )
    }

    return (
        <View>
            {
                Object.entries(users).map((item, index) => {
                    return(
                        <View key={index}>
                            <Text style={styles.label}>{item[0]} </Text>
                            <Text style={styles.value}>{item[1]}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
     */
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