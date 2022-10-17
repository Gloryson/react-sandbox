import React, { createContext, useReducer } from "react";
import { mainReducer } from "./mainReducer";



export const Context = createContext();



export default function AppProvider ({children}) {

  const [state, dispatch] = useReducer(mainReducer, {

  })

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}