import React from 'react';
import { Container, Label, Info } from './styles';

export default function Profile({ navigation }) {
  return (
    <Container>
      <Label>Nome</Label>
      <Info>Diego Fernandes</Info>
    </Container>
  );
}

Profile.navigationOptions = ({ navigation }) => ({
  title: `Perfil do ${navigation.getParam('name')}`,
});