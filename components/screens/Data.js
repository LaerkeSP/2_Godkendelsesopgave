//Importerer nødvendige libraries
import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import firebase from "firebase/compat";
import { db } from "../../firebase-config";
import { getDoc, doc } from "firebase/firestore";

function DataScreen({navigation}) {
    //danner user som useState
    const [user, setUser] = useState([]);
    //gotten from https://www.youtube.com/watch?v=jCY6DH8F4oc
    //danner koblingen til databasen og henter dataen via bruger id
    const userID = firebase.auth().currentUser.uid
    const docRef = doc(db, "users", userID);

    useEffect(() => {
        //det første der sker når siden loader
        const getUser = async () => {
            //taget fra https://softauthor.com/firebase-firestore-get-document-by-id/
            //henter dataen fra databasen
            const data = await getDoc(docRef);
            //indsætter dataen for user
            setUser(data.data())
        };
        getUser()
    }, [])

    return (
        //viser dataen på siden
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