import React from 'react';
import Button from '../../components/Button';
import {Context} from '../../context/state';
import i18n from '../../i18n';
import * as Styles from './components/styles';
import * as constants from '../../types/constants';

const Home = (): JSX.Element => {
  const context = React.useContext(Context);
  const {actions, state} = context;
  const {fetchAnts} = actions;

  const isLoading = state.loadState === constants.IN_PROGRESS;

  const handlePress = () => {
    console.log(state);
    if (state.loadState === constants.NOT_YET_RUN) {
      fetchAnts();
    }
  };

  return (
    <Styles.Container>
      <Button
        onPress={handlePress}
        disabled={isLoading}
        label={i18n.t(`labels.${!isLoading ? 'fetchAnts' : 'loading'}`)}
      />
    </Styles.Container>
  );
};

export default Home;
