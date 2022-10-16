import { createContext } from "react";



export const Context = createContext();



export default function AppProvider ({children}) {


  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  )
}