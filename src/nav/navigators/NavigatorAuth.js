
// IMPORT React
import React from "react";
// IMPORT React-Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// IMPORT Screens
import PageAuthLogin from "../../pages/auth/PageAuthLogin";
import PageAuthPassword from "../../pages/auth/PageAuthPassword";
import PageAuthProcess from "../../pages/auth/PageAuthProcess";
import PageAuthRegister from "../../pages/auth/PageAuthRegister";
// TODO: Determine whether any other imports are required here

// DECLARE Navigation Stack
const Stack = createStackNavigator();

/**
 * NavigatorAuth includes all the screens intended to be
 * navigated in scope of the authentication sub-app
 * as a standalone stack navigator component
 */
const NavigatorAuth = ({ states, utils, data }) => {
  return (
    // TODO whether to introduce screen container here
    <NavigationContainer
    // TODO* passing below for enabling nested navigation containment
    independent={true}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="PageLogin"
          component={PageAuthLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PageRegister"
          component={PageAuthRegister}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PagePassword"
          component={PageAuthPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PageProcess"
          component={PageAuthProcess}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigatorAuth;