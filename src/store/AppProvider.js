import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";


const Context = createContext();


export default function AppProvider({children}) {

  const [state, dispatch] = useReducer(reducer, {

  })

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}