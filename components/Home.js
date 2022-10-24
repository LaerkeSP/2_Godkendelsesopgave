//Importerer nødvendige libraries
import React from "react";
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Importerer de forskellige screens fra screen mappen
import EventsScreen from "./screens/Events";
import SettingsScreen from "./screens/Settings";
import SubscribedScreen from "./screens/Subscribed";

function HomeScreen(){
    //Laver en konstant af tabnavigator
    const Tab = createBottomTabNavigator();

    //Danner de forskellige screens indenfor en tab navigator med navn og ikon
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name={'Subscribed'}
                    component={SubscribedScreen}
                    options={
                        {tabBarIcon: () => (<Ionicons name='star' size={20} />), headerShown:null}
                    }
                />
                <Tab.Screen
                    name={'Events'}
                    component={EventsScreen}
                    options={
                        {tabBarIcon: () => (<Ionicons name='calendar' size={20} />), headerShown:null}
                    } />
                <Tab.Screen
                    name={'Settings'}
                    component={SettingsScreen}
                    options={
                        {tabBarIcon: () => (<Ionicons name='settings' size={20} />), headerShown:null}
                    } />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});