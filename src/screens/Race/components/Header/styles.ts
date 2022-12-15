import styled from 'styled-components/native';
import {IThemeProps} from '../../../../types';

export const Title = styled.Text`
  text-align: center;
  color: ${(props: IThemeProps) => props.theme.textColor};
  margin: 20px 0;
  font-weight: 700;
`;
