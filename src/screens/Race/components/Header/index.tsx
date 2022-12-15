import React from 'react';
import {Context} from '../../../../context/state';
import i18n from '../../../../i18n';
import * as Styles from './styles';

const Header = (): JSX.Element => {
  const context = React.useContext(Context);
  const {state} = context;
  return (
    <Styles.Title>
      {i18n.t('labels.raceStatus')}
      {i18n.t(`raceStatus.${state.raceState}`)}
    </Styles.Title>
  );
};

export default React.memo(Header);
