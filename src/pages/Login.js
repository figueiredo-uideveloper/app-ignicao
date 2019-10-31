import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View, Keyboard, FlatList } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #7159c1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Title = styled.Text`
  font-size: 28px;
  color: #FFF;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  align-self: stretch;
  background: ${({ hasError }) => hasError ? '#f00' : '#111'};
  padding: 15px 30px;
  border-radius: 4px;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const Student = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  align-self: stretch;
  background: #fff;
  padding: 15px 20px;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 17px;
`;

export default function Login() {
  const [studentInput, setStudentInput] = useState('');
  const [hasError, setHasError] = useState(false);

  const [students, setStudents] = useState([
    'Diego',
    'Robson'
  ]);

  function handleAddStudent() {
    if (!studentInput) {
      setHasError(true);
      return;
    }

    setStudents([...students, studentInput]);
    setStudentInput('');

    Keyboard.dismiss();
  }

  return (
    <Container behavior="padding">
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="dark-content"
      />

      <SafeAreaView>
        <Title>Estudantes:</Title>

        <FlatList
          data={students}
          keyExtractor={student => student}
          renderItem={({ item: student }) => <Student>{student}</Student>}
        />

        <Input 
          autoCorrect={false}
          autoCapitalize="words"
          placeholder="Nome do aluno"
          onChangeText={setStudentInput}
          value={studentInput}
          returnKeyType="send"
          onSubmitEditing={handleAddStudent}
        />

        <Button hasError={hasError} onPress={handleAddStudent}>
          <ButtonText>Cadastrar aluno</ButtonText>
        </Button>
      </SafeAreaView>
    </Container>
  );
}

Login.navigationOptions = {
  title: 'Login'
};