import React from 'react';
import { StatusBar } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import {
  Container,
  Title,
  Button,
  ButtonText,
} from './styles'

export default function Login({ navigation }) {
  async function handleFacebookLogin() {
    navigation.navigate('Dashboard');
    
    // try {
    //   const {
    //     type,
    //     token,
    //   } = await Facebook.logInWithReadPermissionsAsync('2535059776587848', {
    //     permissions: ['public_profile', 'email'],
    //   });

    //   if (type === 'success') {
    //     const { status } = await Permissions.askAsync(Permissions.LOCATION);

    //     if (status !== 'granted')
    //       return;

    //     const location = await Location.getCurrentPositionAsync({});
        
    //     // console.log(location);
    //     // console.log(token);

        
    //   }
    // } catch ({ message }) {
    //   alert(`Facebook Login Error: ${message}`);
    // }
  }

  return (
    <Container behavior="padding">
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content"
      />

      <Title>FLInsider</Title>

      <Button onPress={handleFacebookLogin}>
        <ButtonText>Entrar com Facebook</ButtonText>
      </Button>
    </Container>
  );
}