import styled from 'styled-components/native';
import {IThemeProps} from '../../../../types';

export const Container = styled.View`
  background-color: ${(props: IThemeProps) => props.theme.quaternaryColor};
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 3px 0;
`;

export const HalfRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-weight: 600;
  color: ${(props: IThemeProps) => props.theme.textColor};
`;

export const Desc = styled.Text`
  color: ${(props: IThemeProps) => props.theme.textColor};
`;
