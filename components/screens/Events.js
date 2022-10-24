//Importerer nødvendige libraries
import React from "react";
import {StyleSheet, Text, View} from "react-native";

function EventsScreen(){
    //Retur der viser et view med tekst
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Dette er siden hvor man kan se alle de events man deltager i
            </Text>
        </View>
    )
}

export default EventsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lavenderblush',
    },
    text: {
        fontSize: 20,
        margin: 20
    }

});