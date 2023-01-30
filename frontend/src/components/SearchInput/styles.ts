import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex-direction: row;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  padding-left: 15px;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const ClearIconContainer = styled.View`
  padding: 20px;
`;

export const ClearIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Input = styled.TextInput`
  font-size: 20px;
  padding-left: 5px;
  color: #000;
`;
