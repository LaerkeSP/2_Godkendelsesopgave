//Importerer alle libraries
import React, {useState} from "react";
import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";
import firebase from "firebase/compat";

//Funktion der håndterer oprettelse af bruger
//Funktionen tager email, password og setErrorMessage som input
async function handleSubmit({email, password, name, interests, setErrorMessage}){
    //Funktionen prøver at oprette den nye bruger med email og password og catcher en fejlbesked hvis ikke det lykkedes
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password).then((data)=>{
            firebase.database().ref('/User/').push(
                {email, name, interests}
            );
            Alert.alert('Brugeren er oprettet!')
        });

    } catch (error){
        setErrorMessage(error.message)
    }
}

function SignUpScreen(){
    //Definerer de forskellige konstanter
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [interests, setInterests] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    //Funktion der håndterer at opret bruger knappen bliver trykket på
    const signUpButton = () => {
        //Returnerer kaldet til handleSubmit funktionen
        return <Button onPress={() =>
            handleSubmit({email, password, name, interests, setErrorMessage})}
                       title="Opret bruger"
        />;
    };

    //Retur funktion der indeholder et tekst indput felt for email og password
    return(
        <View style={styles.border}>
            <Text style={styles.text}>
                Opret bruger
            </Text>
            <TextInput
                placeholder='email'
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder='password'
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                style={styles.inputField}
            />
            <TextInput
                placeholder='name'
                value={name}
                onChangeText={(name) => setName(name)}
                style={styles.inputField}
            />
            <TextInput
                placeholder='interests'
                onChangeText={(interests) => setInterests(interests)}
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {signUpButton()}
        </View>

    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontStyle: "italic",
        paddingTop: 10,
        paddingBottom: 10
    },
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
        margin: 20
    },
    text: {
        fontSize: 20
    }
});