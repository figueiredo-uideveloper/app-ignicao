import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import api from '../../services/api';

import { Container, Input, SubmitButton, SubmitButtonText } from './styles';

export default function ProfileUpdate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [belt, setBelt] = useState('');

  useEffect(() => {
    async function loadProfile() {
      const response = await api.get('profile');

      setName(response.data.name);
      setEmail(response.data.email);
      setCompany(response.data.company);
      setBelt(response.data.belt);
    }

    loadProfile();
  }, []);

  async function handleSaveProfile() {
    await api.put('profile', {
      name,
      company,
      belt,
    })

    Alert.alert('Sucesso!', 'Perfil atualizado!')
  }

  return (
    <Container>
      {/* <ActivityIndicator size="small"  /> */}

      <Input
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Input
        value={email} 
        placeholder="Digite seu e-mail" 
        editable={false}
      />

      <Input
        placeholder="Digite sua empresa"
        value={company}
        onChangeText={setCompany}
      />

      <Input
        placeholder="Digite sua faixa"
        value={belt}
        onChangeText={setBelt}
      />


      <SubmitButton onPress={handleSaveProfile}>
        <SubmitButtonText>Salvar perfil</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}

ProfileUpdate.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => <MaterialIcons name="person" size={24} color={tintColor} />
};