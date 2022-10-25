//Importerer nødvendige libraries
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import firebase from "firebase/compat";

function SubscribedScreen(){
/*
    if (!firebase.auth().signOut()) {
        return (
            <View><Text>Not found</Text></View>
        )
    }

 */




    //Retur der viser et view med tekst
    return(
        <View style={styles.container}>
            <Text>Current user: {firebase.auth().currentUser.email}</Text>

        </View>
    );
}

export default SubscribedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'honeydew',
    },
    text: {
        fontSize: 20,
        margin: 20
    },
});