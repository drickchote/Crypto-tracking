import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #1e1e1e;
  padding: 22px;
`;

export const Symbol = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 20px;
  margin-left: 5px;
`;

export const Price = styled.Text`
  color: #d49900;
  font-size: 20px;
  font-weight: bold;
`;
