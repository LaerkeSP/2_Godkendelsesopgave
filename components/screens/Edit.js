//importerer relevante libraries
import React, {useState} from "react";
import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import firebase from "firebase/compat";


function EditScreen({navigation}){
    //deklærer name og interest states
    const [name, setName] = useState('');
    const [interests, setInterests] = useState('');
    //deklærer databasen
    const userID = firebase.auth().currentUser.uid
    const docRef = doc(db, "users", userID);
    //deklærer errormessage
    const [errorMessage, setErrorMessage] = useState(null);


    const editData = async () => {
        //danner dataen der skal sendes til databasen
        const data = {
            name: name,
            interests: interests
        }
        //try catch hvis der sker en fejl
        try {
            //taget fra https://softauthor.com/firebase-firestore-update-document-data-updatedoc/
            //kald til firestore databasen der inkluderer referencen og dataen
            await updateDoc(docRef, data).then(() => {
                Alert.alert('Din bruger er blevet opdateret!!!')
                navigation.goBack()
            })
        } catch (error){
            setErrorMessage(error.message);
        }
    }


    return(
        //inputfelter for navn og interesser, da de er de eneste der skal kunne blive ændret
        <View style={styles.border}>
            <Text style={styles.header}>Ændre bruger</Text>
            <TextInput
                placeholder='navn'
                value={name}
                onChangeText={(name) => setName(name)}
                style={styles.inputField}
            />
            <TextInput
                placeholder='interesser'
                value={interests}
                onChangeText={(interests) => setInterests(interests)}
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            <Button title='Gem ændringer' onPress={editData} />
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({
    inputField: {
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 5,
        padding: 15,
        borderColor: 'grey'
    },
    header: {
        fontSize: 40,
        paddingBottom: 20
    },
    border: {
        margin: 20,
        paddingTop: 50
    },
    text: {
        fontSize: 20
    },
    error: {
        color: 'red',
        fontStyle: "italic",
        paddingTop: 10,
        paddingBottom: 10
    },
});