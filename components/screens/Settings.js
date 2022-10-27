//Importerer nødvendige libraries
import React, {useEffect, useState} from "react";
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import firebase from "firebase/compat";
//import { firebase } from '@react-native-firebase/database';
import { db } from "../../firebase-config";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

function SettingsScreen({route, navigation}) {
    //gotten from https://www.youtube.com/watch?v=jCY6DH8F4oc
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const userID = firebase.auth().currentUser.uid
    const docRef = doc(db, "users", userID);


    useEffect(() => {
        const getUser = async () => {
            const test = await getDocs(usersCollectionRef)
            setUsers(test.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            //taget fra https://softauthor.com/firebase-firestore-get-document-by-id/
            const data = await getDoc(docRef);

            //test er en helt gigantisk væg af ren tekst - det er nok derfor den kan mappes
            console.log(data)


        };
        getUser()
    }, [])



/*
    return (
        <View style={styles.container}>
            {users.map((user) => {
                return (
                    <Text>
                        Navn: {user.name}
                        Interesser: {user.interests}
                    </Text>
                )
            })}
        </View>
    )

 */





    /*
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

     */


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