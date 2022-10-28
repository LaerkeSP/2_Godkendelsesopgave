//Importerer nødvendige libraries
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import firebase from "firebase/compat";

function SubscribedScreen(){
    //Retur der viser et view med brugerens id
    return(
        <View style={styles.container}>
            <Text>Current user: {firebase.auth().currentUser.uid}</Text>
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