import React, {useReducer} from "react";
import {reducer, initialState} from './reducer';
import acts from './actions';

export const Context = React.createContext(null);

type P = {
  children: JSX.Element;
};

const Provider = ({children}: P): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = acts(state, dispatch);

return(
  <Context.Provider
    value={{
      state,
      actions
    }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
