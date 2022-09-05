import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import SocialSignIn from '../../components/socialSignIn';
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();
  
  const onSubmitPress = () => {
    navigation.navigate('HomeStarter');
  }

  const onSignIn = () => {
    navigation.navigate('Login');
  }

    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}> Reset your password </Text> 

        <CustomInput placeholder="Code" value={code} setValue={setCode} />
        <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword} />
      
        <CustomButton text="Submit" onPress={onSubmitPress} />
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

export default NewPassword;