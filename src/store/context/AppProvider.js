import React, { createContext, useReducer } from "react";
import { MainReducer } from "../reducers/MainReducer";



export const Context = createContext();



export default function AppProvider ({children}) {

  const [state, dispatch] = useReducer(MainReducer, {
    array: []
  })

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}