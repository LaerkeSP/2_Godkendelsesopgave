//Importerer nødvendige libraries
import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import firebase from "firebase/compat";
import { db } from "../../firebase-config";
import { getDoc, doc } from "firebase/firestore";

function DataScreen({navigation}) {
    //gotten from https://www.youtube.com/watch?v=jCY6DH8F4oc
    const [user, setUser] = useState([]);
    const userID = firebase.auth().currentUser.uid
    const docRef = doc(db, "users", userID);

    useEffect(() => {
        const getUser = async () => {
            //taget fra https://softauthor.com/firebase-firestore-get-document-by-id/
            const data = await getDoc(docRef);
            setUser(data.data())
        };
        getUser()
    }, [])

    return (
        <View style={styles.container}>
            <Text>
                Navn: {user.name} {'\n'}
                Email: {user.email} {'\n'}
                Interesser: {user.interests} {'\n'}
            </Text>
            <Button title='Edit' onPress={() => navigation.navigate('edit')} />
        </View>
    )
}

export default DataScreen

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