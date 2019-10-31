import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Button, ButtonText } from './styles';

export default function Launchs() {
  function handleImportCalendar() {

  }

  return (
    <Container>
      <Button onPress={handleImportCalendar}>
        <ButtonText>Importar calendário</ButtonText>
      </Button>
    </Container>
  );
}

Launchs.navigationOptions = {
  tabBarLabel: 'Lançamentos',
  tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="rocket" size={24} color={tintColor} />
};