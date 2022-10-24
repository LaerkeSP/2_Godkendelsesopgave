//Importerer nødvendige libraries
import React from "react";
import {StyleSheet, Text, View} from "react-native";

function SettingsScreen(){
    //Retur der viser et view med tekst
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Dette er siden hvor man kan ændre hvilke hobbier man følger og hvilken distance man ønsker
            </Text>
        </View>
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