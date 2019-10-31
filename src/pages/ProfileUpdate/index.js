import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Input, SubmitButton, SubmitButtonText } from './styles';

export default function ProfileUpdate() {
  return (
    <Container>
      <Input placeholder="Digite seu nome" />
      <Input placeholder="Digite seu e-mail" editable={false} />
      <Input placeholder="Digite sua empresa" />
      <Input placeholder="Digite sua faixa" />

      <SubmitButton onPress={() => {}}>
        <SubmitButtonText>Salvar perfil</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}

ProfileUpdate.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => <MaterialIcons name="person" size={24} color={tintColor} />
};