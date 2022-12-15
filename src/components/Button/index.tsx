import React, {memo} from 'react';
import {GestureResponderEvent} from 'react-native';
import * as Styled from './styles';

interface T {
  onPress: Function;
  label: string;
  disabled?: boolean;
}

const Button = (props: T): JSX.Element => {
  const {onPress, label, disabled} = props;

  const handlePress = (e: GestureResponderEvent): void => {
    if (!disabled) {
      onPress(e);
    }
  };

  return (
    <Styled.Area onPress={handlePress} disabled={disabled}>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Area>
  );
};

export default memo(Button);
