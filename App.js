//Importing libraries
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";

//Importing screens
import LogInScreen from "./components/LogIn";
import SignUpScreen from "./components/SignUp";
import HomeScreen from "./components/Home";

//Firebase kontakt

const firebaseConfig = {
  apiKey: "AIzaSyDoyIDS_N2y1OLE1hKlWplC-MgsliibGgQ",
  authDomain: "godkendelsesopgave-af286.firebaseapp.com",
  projectId: "godkendelsesopgave-af286",
  storageBucket: "godkendelsesopgave-af286.appspot.com",
  messagingSenderId: "753624366199",
  appId: "1:753624366199:web:b0a9f99972119189305a72",
};


//Initierer firebase databasen
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



//Funktion for bruger der ikke er logget ind
function guestPage(){
  //Danner en konstant for til at stacke skærme
  const Stack = createStackNavigator();



  //Returnerer de tre screens: Log in og Sign up
  //Disse skærme er stacked og kan derfor kun manureres via knapper
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Log in'} component={LogInScreen} />
          <Stack.Screen name={'Sign up'} component={SignUpScreen} />
          <Stack.Screen name={'Home'} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

//Selve app funktionen
export default function App() {
  //Definerer bruger konstanter der har staten ikke logget ind
  const [user, setUser] = useState({ loggedIn: false });

  //
  function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({loggedIn: true, user: user});
      } else {
        callback({loggedIn: false});
      }
    });
  }

  //funktion der træder i kræft med det samme siden loader
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  //Tjekker om brugerens status er ændret til at være logged ind
  //Hvis brugerens status er ændret kommer brugeren ind til HomeScreen, hvis ikke bliver de på guestPage
  return(
      user.loggedIn ? <HomeScreen /> : guestPage()
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


