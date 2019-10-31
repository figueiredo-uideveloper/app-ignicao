import React from 'react';
import { Container, Avatar, Label, Info } from './styles';

export default function Profile({ navigation }) {
  return (
    <Container>
      <Avatar 
        source={{ 
          uri: 'https://pbs.twimg.com/profile_images/778771552712163328/dPVjJD03_400x400.jpg'
        }} 
      />

      <Label>Nome</Label>
      <Info>Diego Fernandes</Info>

      <Label>Email</Label>
      <Info>diego@rocketseat.com.br</Info>

      <Label>Emoresa</Label>
      <Info>Rocketseat</Info>

      <Label>Faixa</Label>
      <Info>Preta</Info>
    </Container>
  );
}

Profile.navigationOptions = ({ navigation }) => ({
  title: `Perfil do ${navigation.getParam('name')}`,
});