import React, { useState } from "react";

export const Context = React.createContext();

export default function ALL ({children}) {
  const [gg, setgg] = useState(0);
  const [gg2, setgg2] = useState('gg');

  return (
    <>
      <Context.Provider value={[gg, setgg, gg2, setgg2]}>
        {children}
      </Context.Provider>
    </>
  )
}