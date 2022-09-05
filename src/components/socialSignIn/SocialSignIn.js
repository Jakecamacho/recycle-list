import React from "react";
import {View, Text} from 'react-native'
import CustomButton from "../customButton";


const SocialSignIn = () => {
    const onSignInFb = () => {
        console.warn("Facebook");
      }
    
      const onSignInGoogle = () => {
        console.warn("Google");
      }
    return (
        <>
         <CustomButton text="Sign In with Facebook" onPress={onSignInFb} bgcolor="#E7EAF4" fgcolor="#4765A9" />
         <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgcolor="#FAE9EA" fgcolor="#DD4D44" /> 
        </>
    )
}

export default SocialSignIn