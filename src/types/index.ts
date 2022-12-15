export type states = 'notYetRun' | 'inProgress' | 'calculated';

export interface IAntResponse {
  name: string;
  length: number;
  color: string;
  weight: number;
}

export interface IAntFetch {
  ants: IAntResponse[];
}

export interface IAnt extends IAntResponse {
  index: number;
  state: states;
  odd?: number;
}

export interface IContextState {
  ants: IAnt[];
  raceState: states;
  loadState: states;
}

export interface IThemeType {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  quaternaryColor: string;
  textColor: string;
  backgroundColor: string;
}

export interface IThemeProps {
  theme: IThemeType;
}

export interface IActions {
  fetchAnts: Function;
  reset: Function;
  startRace: Function;
  endRace: Function;
}
