import React, { useState } from "react";

export const Context = React.createContext();

export default function ALL ({children}) {
  const [gg, setgg] = useState(0);
  const [gg2, setgg2] = useState(1);

  return (
    <>
      <Context.Provider value={{gg:gg, setgg:setgg, gg2:gg2, setgg2:setgg2}}>
        {children}
      </Context.Provider>
    </>
  )
}