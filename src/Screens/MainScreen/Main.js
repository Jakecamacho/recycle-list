import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import SocialSignIn from '../../components/socialSignIn';
import Loyalty from '../LoyaltyScreen/Loyalty';
import Profile from '../ProfileScreen/Profile';
import Infomation from '../InformationScreen/Information';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition'

const homeName = 'Home'
const loyaltyName = 'Loyalty'
const profileName = 'Profile'
const informationName = 'Information'

const Home = () => {
  const [email, setEmail] = useState('');
  // const Stack = createNativeStackNavigator();
  const[image, setImage] = useState(null);
  const [text, setText] = useState(null);

  // useEffect(() =>{
  //   launchImageLibrary({}, setImage);
  // }, [])
  
  // useEffect(() =>{
  //   (async () => {
  //     if(image){
  //       const result = await TextRecognition.recognize(image.assets[0].uri)
  //       console.log(image);
  //       setText(result);
  //     }
  //   })();
  // }, [image])

  const onConfirmPress = () => {
    console.warn("Confirmed");
  }

  const onReSend = () => {
    console.warn("Resent Code ");
  }

  const onSignIn = () => {
    console.warn("Sign In");
  }

    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}> Main Screen</Text> 
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

export default Home;