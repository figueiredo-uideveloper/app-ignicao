import React from 'react';
import { Container, Avatar, Label, Info } from './styles';

export default function Profile({ navigation }) {
  const user = navigation.getParam('user');

  return (
    <Container>
      <Avatar 
        source={{ 
          uri: user.avatar
        }} 
      />

      <Label>Nome</Label>
      <Info>{user.name}</Info>

      <Label>Email</Label>
      <Info>{user.email}</Info>

      <Label>Empresa</Label>
      <Info>{user.company || 'Não setado'}</Info>

      <Label>Faixa</Label>
      <Info>{user.belt || 'Não setado'}</Info>
    </Container>
  );
}

Profile.navigationOptions = ({ navigation }) => ({
  title: `Perfil do ${navigation.getParam('user').name}`,
});