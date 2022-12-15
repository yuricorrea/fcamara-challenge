import {IAnt, IContextState, states} from '../../types';
import * as constants from '../../types/constants';
import Types from './types.actions';

export const initialState: IContextState = {
  ants: [],
  loadState: constants.NOT_YET_RUN,
  raceState: constants.NOT_YET_RUN,
};

interface IAction {
  type: string;
  raceState?: states;
  loadState?: states;
  ants?: IAnt[];
  index?: number;
  odd?: number;
}

export const reducer = (
  state: IContextState,
  action: IAction,
): IContextState => {
  const {type} = action;
  switch (type) {
    case Types.FETCH_ANTS:
      return {
        ...state,
        loadState: action?.loadState || state.loadState,
      };
    case Types.ANTS_DATA:
      return {
        ...state,
        loadState: constants.CALCULATED,
        ants: action?.ants || state.ants,
      };
    case Types.FETCH_ODD:
      return {
        ...state,
        ants: state.ants.map(function (ant) {
          if (ant.index === action?.index) {
            return {
              ...ant,
              state: constants.IN_PROGRESS,
            };
          }
          return ant;
        }),
      };
    case Types.SET_ODD:
      return {
        ...state,
        ants: state.ants.map(function (ant) {
          if (ant.index === action?.index) {
            return {
              ...ant,
              state: constants.CALCULATED,
              odd: action.odd,
            };
          }
          return ant;
        }),
      };
    case Types.START_RACE:
      return {
        ...state,
        raceState: constants.IN_PROGRESS,
      };
    case Types.END_RACE:
      return {
        ...state,
        raceState: constants.CALCULATED,
      };
    case Types.RESET:
      return initialState;
    default:
      return state;
  }
};
