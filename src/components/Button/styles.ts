import styled from 'styled-components/native';
import {IThemeProps} from '../../types';

interface TArea extends IThemeProps {
  disabled?: boolean;
}

export const Area = styled.TouchableOpacity`
  background-color: ${(props: TArea) => props.theme.primaryColor};
  opacity: ${(props: TArea) => (props?.disabled ? '0.5' : '1')};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  elevation: 3;
  box-shadow: -2px 2px 15px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.Text`
  color: ${(props: IThemeProps) => props.theme.textColor};
`;
