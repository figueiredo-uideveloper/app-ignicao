import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #222;
  padding: 20px;
`;

export const Avatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 3px;
  border-color: #333;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #FFF;
  margin-bottom: 5px;
`;

export const Info = styled.Text`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
`;