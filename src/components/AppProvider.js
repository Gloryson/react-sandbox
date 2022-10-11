import React, { useState } from "react";



export const Context = React.createContext();



export default function AppProvider ( {children} ) {


  const [buttonName, setButtonName] = useState(`button1`);
  const [button2Name, setButton2Name] = useState(`button2`);
  const [inputValue, setInputValue] = useState(``);
  const [input2Value, setInput2Value] = useState(``);


  return (
    <Context.Provider value={{buttonName, button2Name, inputValue, input2Value, setButtonName, setButton2Name, setInputValue, setInput2Value}}>
      {children}
    </Context.Provider>
  )
}