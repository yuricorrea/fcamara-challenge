import React from 'react';
import Button from '../../../../components/Button';
import {Context} from '../../../../context/state';
import i18n from '../../../../i18n';
import * as Styles from './styles';
import * as constants from '../../../../types/constants';

const Footer = (): JSX.Element => {
  const context = React.useContext(Context);
  const {state, actions} = context;

  const handlePress = async (): Promise<void> => {
    if (state.raceState === constants.NOT_YET_RUN) {
      actions.startRace();
      return;
    }
    actions.reset();
  };

  return (
    <Styles.Container>
      <Button
        label={i18n.t(`raceButton.${state.raceState}`)}
        disabled={state.raceState === constants.IN_PROGRESS}
        onPress={handlePress}
      />
    </Styles.Container>
  );
};

export default React.memo(Footer);
