import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background: #222;
  padding: ${Constants.statusBarHeight + 20}px 20px 0px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  background: #FFF;
  padding: 15px 20px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 17px;
  opacity: ${props => props.editable === false ? 0.7 : 1};
`;

export const SubmitButton = styled(RectButton)`
  background: #7159c1;
  padding: 15px 20px;
  border-radius: 4px;
  margin-top: 5px;
`;

export const SubmitButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
