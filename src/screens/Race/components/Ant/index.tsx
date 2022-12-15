import React from 'react';
import {Text} from 'react-native';
import i18n from '../../../../i18n';
import {IAnt} from '../../../../types';
import * as Styles from './styles';

interface IProps {
  item: IAnt;
}

const Ant = ({item}: IProps): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.Row>
        <Text numberOfLines={2}>
          <Styles.Title>{i18n.t('ant.name')}: </Styles.Title>
          <Styles.Desc>{item.name}</Styles.Desc>
        </Text>
      </Styles.Row>
      <Styles.Row>
        <Styles.HalfRow>
          <Styles.Title>{i18n.t('ant.length')}: </Styles.Title>
          <Styles.Desc>{item.length}</Styles.Desc>
        </Styles.HalfRow>
        <Styles.HalfRow>
          <Styles.Title>{i18n.t('ant.color')}: </Styles.Title>
          <Styles.Desc>{item.color}</Styles.Desc>
        </Styles.HalfRow>
      </Styles.Row>
      <Styles.Row>
        <Styles.HalfRow>
          <Styles.Title>{i18n.t('ant.weight')}: </Styles.Title>
          <Styles.Desc>{item.weight}</Styles.Desc>
        </Styles.HalfRow>
        <Styles.HalfRow>
          <Styles.Title>{i18n.t('ant.odd')}: </Styles.Title>
          <Styles.Desc>
            {item.odd ? `${item.odd}%` : i18n.t(`antStatus.${item.state}`)}
          </Styles.Desc>
        </Styles.HalfRow>
      </Styles.Row>
    </Styles.Container>
  );
};

export default Ant;
