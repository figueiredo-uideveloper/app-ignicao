import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #111;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #FFF;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  align-self: stretch;
  background: #3b5998;
  padding: 15px 30px;
  border-radius: 4px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;