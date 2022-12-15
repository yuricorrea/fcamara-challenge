import React from 'react';
import {FlatList} from 'react-native';
import * as Styles from './components/styles';
import {Context} from '../../context/state';
import {IAnt} from '../../types';
import Ant from './components/Ant';
import Header from './components/Header';
import Footer from './components/Footer';

interface IItem {
  item: IAnt;
}

const Race = (): JSX.Element => {
  const context = React.useContext(Context);
  const {actions, state} = context;
  const {ants} = state;

  React.useEffect(() => {
    const running = ants.find(ant => ant?.odd === undefined) || [];
    if (running?.length == 0 && ants.length > 0) {
      actions.endRace();
    }
  }, [ants]);

  const renderItem = ({item}: IItem) => <Ant item={item} />;

  const sorted = state.ants.sort((a, b) =>
    (a?.odd || 0) > (b?.odd || 0) ? -1 : 1,
  );

  return (
    <Styles.Container>
      <FlatList
        data={sorted}
        keyExtractor={(i,k) => `${k}`}
        renderItem={renderItem}
        ItemSeparatorComponent={Styles.Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </Styles.Container>
  );
};

export default Race;
