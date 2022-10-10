import React, { useState } from "react";
import First from "./components/First";
import Sec from "./components/Sec";

export const Context = React.createContext();

export default function App() {

  

  const [gg, setgg] = useState(0);

  return (
    <Context.Provider value={[gg, setgg]}>
      <First/>
      <Sec/>
    </Context.Provider>
  );
}