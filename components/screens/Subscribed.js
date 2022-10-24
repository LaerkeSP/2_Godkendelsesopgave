//Importerer nødvendige libraries
import React from "react";
import {StyleSheet, Text, View} from "react-native";

function SubscribedScreen(){
    //Retur der viser et view med tekst
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Dette er siden for alle de type hobbier man følger
            </Text>
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