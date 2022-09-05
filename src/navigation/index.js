import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../Screens/signInScreen/Login';
import SignUp from '../Screens/SignUpScreen/SignUp';
import Confirmation from '../Screens/ConfirmationScreen/Confirmation';
import ForgotPassword from '../Screens/ForgotPasswordScreen';
import NewPassword from '../Screens/NewPasswordScreen/NewPassword';
import HomeStarter from "../Screens/MainScreen/Main";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer style = {styles.root}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="HomeStarter" component={HomeStarter} />
                <Stack.Screen name="Confirmation" component={Confirmation} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="NewPassword" component={NewPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#42a5f5',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });


export default Navigation