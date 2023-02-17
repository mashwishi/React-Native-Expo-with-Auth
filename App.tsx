/// <reference types="nativewind/types" />

import { StatusBar } from 'expo-status-bar';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from './pages/register';
import Login from './pages/login';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{title: 'Register', headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{title: 'Login', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}