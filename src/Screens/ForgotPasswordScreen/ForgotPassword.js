import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import SocialSignIn from '../../components/socialSignIn';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  
  const onConfirmPress = () => {
    navigation.navigate('NewPassword');
  }

  const onSignIn = () => {
    navigation.navigate('Login');
  }

    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}> Reset your password </Text> 

        <CustomInput placeholder="Enter your email" value={email} setValue={setEmail} />
      
        <CustomButton text="Send" onPress={onConfirmPress} />
        <CustomButton text="Back to Sign In" onPress={onSignIn} type="TERTIARY"/>
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

export default ForgotPassword;