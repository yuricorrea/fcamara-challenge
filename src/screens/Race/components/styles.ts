import styled from 'styled-components/native';
import {IThemeProps} from '../../../types';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${(props: IThemeProps) => props.theme.backgroundColor};
  justify-content: center;
  align-items: stretch;
`;

export const Separator = styled.View`
  width: 1px;
  height: 10px;
`
