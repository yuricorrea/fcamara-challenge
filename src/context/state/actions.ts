import {IAnt, IContextState} from '../../types';
import {generateAntWinLikelihoodCalculator, getAntData} from '../api';
import Types from '../state/types.actions';
import * as constants from '../../types/constants';
import {StackActions} from '@react-navigation/native';
import RoutePath from '../../routes/RoutePath';

interface INavigation {
  dispatch: Function;
}

const Actions = (
  state: IContextState,
  dispatch: Function,
  navigation: INavigation,
) => {
  const fetchAnts = async (): Promise<void> => {
    dispatch({
      type: Types.FETCH_ANTS,
      loadState: constants.IN_PROGRESS,
    });
    const response = await getAntData();
    if (!response) {
      dispatch({
        type: Types.FETCH_ANTS,
        loadState: constants.NOT_YET_RUN,
      });
      return;
    }
    dispatch({
      type: Types.ANTS_DATA,
      ants: response.ants.map(function (ant, index) {
        return {
          ...ant,
          index,
          state: constants.NOT_YET_RUN,
        } as IAnt;
      }),
    });
    navigation.dispatch(StackActions.push(RoutePath.RACE));
  };

  const oddPercent = (odd: number): number => Number((odd * 100).toFixed(2));

  const generateOdd = (index: number): void => {
    dispatch({
      type: Types.FETCH_ODD,
      index,
    });
    generateAntWinLikelihoodCalculator()((odd: number) => {
      dispatch({
        type: Types.SET_ODD,
        index,
        odd: oddPercent(odd),
      });
    });
  };

  // back to initial state
  const reset = (): void => {
    dispatch({
      type: Types.RESET,
    });
    navigation.dispatch(StackActions.popToTop());
  };

  const startRace = (): void => {
    // only if data has been fetched
    if (!state.ants.length) {
      return;
    }
    dispatch({
      type: Types.START_RACE,
    });
    //  running calculations on all ants simultaneously.
    state.ants.forEach(ant => {
      generateOdd(ant.index);
    });
  };

  const endRace = (): void => {
    dispatch({
      type: Types.END_RACE,
    });
  };

  return {
    fetchAnts,
    reset,
    startRace,
    endRace,
  };
};

export default Actions;
