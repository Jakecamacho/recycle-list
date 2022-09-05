import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './src/Screens/signInScreen/Login';
import SignUp from './src/Screens/SignUpScreen/SignUp';
import Confirmation from './src/Screens/ConfirmationScreen/Confirmation';
import ForgotPassword from './src/Screens/ForgotPasswordScreen';
import NewPassword from './src/Screens/NewPasswordScreen/NewPassword';
import Main from './src/Screens/MainScreen/Main';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style = {styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#42a5f5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App; 
