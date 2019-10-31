import React from 'react';
import { StatusBar } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import api from '../../services/api';

import {
  Container,
  Title,
  Button,
  ButtonText,
} from './styles'

export default function Login({ navigation }) {
  async function handleFacebookLogin() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted')
      return;

    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

    const response = await api.post('/sessions', {
      latitude,
      longitude,
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
    })

    const { created, token } = response.data;

    api.defaults.headers['Authorization'] = `Bearer ${token}`; 

    navigation.navigate(created ? 'ProfileUpdate' : 'Dashboard');
    
    // try {
    //   const {
    //     type,
    //     token,
    //   } = await Facebook.logInWithReadPermissionsAsync('2535059776587848', {
    //     permissions: ['public_profile', 'email'],
    //   });

    //   if (type === 'success') {
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