//Importerer nødvendige libraries
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import DataScreen from "./Data";
import EditScreen from "./Edit";

function SettingsScreen() {
    //Danner en stack navigator så man kan gå ind på ændre bruger siden
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            //sikrer at headeren ikke bliver vist
            screenOptions = {{
                headerShown: false
            }}
        >
            <Stack.Screen name='data' component={DataScreen} />
            <Stack.Screen name='edit' component={EditScreen} />
        </Stack.Navigator>
    )
}

export default SettingsScreen

