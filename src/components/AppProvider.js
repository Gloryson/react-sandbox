import React, { useReducer } from "react";
import { reducer } from "./reducer";



export const Context = React.createContext();



export default function AppProvider ( {children} ) {

  const [state, dispatch] = useReducer(reducer, {buttonName: `button`,
  inputValue: ``, text: ``})

  return (
    <Context.Provider value={{dispatch, state}}>
      {children}
    </Context.Provider>
  )
}