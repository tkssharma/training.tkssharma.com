import React, { createContext, useReducer } from 'react';
import { LS_TRANSLATIONS_KEY } from '../constants/ls.constants';

function translationRedeucer(state, action) {
  switch (action.type) {
    case 'set':
      return action.data;
    default:
      return state;
  }
}
export const TranslationCtx = createContext({});

export default function TransalationProvider({ children }) {
  let translations = localStorage.getItem(LS_TRANSLATIONS_KEY) || '{}';
  try {
    translations = JSON.parse(translations);
  } catch (e) {
    translations = {};
  }
  const [state, dispatch] = useReducer(translationRedeucer, translations);
  const t = phrase => state[phrase] || phrase;
  return (
    <TranslationCtx.Provider value={{ t, dispatch }}>
      {children}
    </TranslationCtx.Provider>
  );
}
