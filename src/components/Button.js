import React, { useContext } from "react";
import { Context } from "./AppProvider";

export default function Button () {

  const {buttonName, setInputValue, setButtonName} = useContext(Context);

  return (
    <button onClick={() => {setButtonName(`button1`); setInputValue(`button1`)}}>{buttonName}</button>
  )
}