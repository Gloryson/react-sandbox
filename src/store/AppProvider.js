import React, { useReducer } from "react";
import { reducer } from "./reducer";


export const Context = React.createContext();


export default function AppProvider({children}) {

  const [state, dispatch] = useReducer(reducer, {
    notesArray: [], inputValue: ``, isEdit: false, visible: false
  })

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}