import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? '40px' : 0};
`;

export const RowView = styled.View`
  flex-direction: row;
`;
