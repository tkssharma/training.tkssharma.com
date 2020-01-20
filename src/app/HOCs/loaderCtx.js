import React, { createContext, useReducer } from 'react';
const defaultValue = {
  progress: 0,
};
// Currently not being used
// TODO can be deleted
const ConfigReducer = (state, action) => {
  switch (action.type) {
    case 'start-progress': {
      const inital = defaultValue;
      let i = Math.floor(Math.random() * 40) + 10;
      return Object.assign({}, inital, { progress: i });
    }
    case 'end-progress': {
      const inital = defaultValue;
      return Object.assign({}, inital, { progress: 100 });
    }
    case 'reset-progress': {
      const inital = defaultValue;
      return Object.assign({}, inital, { progress: 0 });
    }
    default:
      return state;
  }
};

export const LoaderCtx = createContext({});

export default function LoaderCtxProvider({ children }) {
  const [state, dispatch] = useReducer(ConfigReducer, defaultValue);
  return (
    <LoaderCtx.Provider value={{ state, dispatch }}>
      {children}
    </LoaderCtx.Provider>
  );
}
