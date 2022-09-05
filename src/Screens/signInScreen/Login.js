import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Logo from '../../../assets/Images/Unknown.png';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton/customButton';
import SocialSignIn from '../../components/socialSignIn/SocialSignIn';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPress = () => {
    navigation.navigate('HomeStarter')
  }

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  const onSignUp = () => {
    console.warn("Re-direct user to sign-up screen");
    navigation.navigate('SignUp')
  }

    return (
      <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} styles={styles.logo} resizeMode="contain" />

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomButton text="Sign In" onPress={onSignInPress} />
        <CustomButton text="Forgot Password?" onPress={onForgotPassword} type="TERTIARY"/>
        <SocialSignIn/>
        <CustomButton text="Do not have an account? Create one here!" onPress={onSignUp} type="TERTIARY"/>
      </View>
      </ScrollView>
    );
};
 

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#42a5f5',
    alignItems: 'center',
    padding: 20,
  },
    logo: {
      width: '70%',
      maxWidth: 500,
      height: 100,
    },
});

export default Login;