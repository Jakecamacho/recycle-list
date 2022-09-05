import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import SocialSignIn from '../../components/socialSignIn';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPress = () => {
    navigation.navigate('Confirmation')

  }

  const onSignIn = () => {
    navigation.navigate('Login')
  }

  const onTermsOfUse = () => {
    console.warn('Terms and conditions screen')
  }

    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}> Create an account</Text> 

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />
        <CustomButton text="Register" onPress={onRegisterPress} />
        <Text>By registering, you confirm your acceptance of our <Text style={styles.link} onPress={onTermsOfUse}>Terms and Conditions!</Text> </Text>
        <SocialSignIn/>

        <CustomButton text="Have an account? Sign In here!" onPress={onSignIn} type="TERTIARY"/>
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
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
    text: {
      color: 'white',
      marginVertical: 10,

    },
    link: {
      color: 'orange'
    },
});

export default SignUp;