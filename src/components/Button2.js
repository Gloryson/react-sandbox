import React, { useContext } from "react";
import { Context } from "./AppProvider";

export default function Button2 () {

  const {button2Name, setInput2Value, setButton2Name} = useContext(Context);

  return (
    <button onClick={() => {setButton2Name(`button2`); setInput2Value(`button2`)}}>{button2Name}</button>
  )
}