export type states = 'notYetRun' | 'inProgress' | 'calculated';

export type TAnt = {
  name: string;
  length: number;
  color: string;
  weight: number;
  state: states;
  odd: number | null;
};

export type TContextState = {
  ants: TAnt[];
  raceState: states;
};
