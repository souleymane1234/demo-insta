/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from "react";
import Router from "./src/navigator/Router";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/screens/home";
import Login from "./src/screens/login";

//custom import
import { AppProvider } from "./src/context/AppContext";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name={"Login"}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Home"}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}
