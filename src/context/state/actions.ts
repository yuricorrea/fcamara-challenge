import {IAnt, IContextState} from '../../types';
import {generateAntWinLikelihoodCalculator, getAntData} from '../api';
import Types from '../state/types.actions';
import * as constants from '../../types/constants';

const Actions = (state: IContextState, dispatch: Function) => {
  const fetchAnts = async (): Promise<void> => {
    dispatch({
      type: Types.FETCH_ANTS,
      raceState: constants.IN_PROGRESS,
    });
    const response = await getAntData();
    if (!response) {
      dispatch({
        type: Types.FETCH_ANTS,
        raceState: constants.NOT_YET_RUN,
      });
      return;
    }
    dispatch({
      type: Types.ANTS_DATA,
      ants: response.ants.map(function (ant, index) {
        generateOdd(index);
        return {
          ...ant,
          index,
          state: constants.NOT_YET_RUN,
        } as IAnt;
      }),
    });
  };

  const oddPercent = (odd: number): number => Number((odd * 100).toFixed(2));

  const generateOdd = (index: number): void => {
    dispatch({
      type: Types.FETCH_ODD,
      index,
    });
    generateAntWinLikelihoodCalculator()((odd: number) => {
      // will set the odd only if the race is not completed yet.
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
  };

  const startRace = (): void => {
    dispatch({
      type: Types.START_RACE,
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
