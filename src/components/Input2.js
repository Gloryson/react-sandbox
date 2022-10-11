import React, { useContext } from "react";
import { Context } from "./AppProvider";

export default function Input2 () {

  const {input2Value, setInput2Value, setButtonName} = useContext(Context);

  return (
    <input value={input2Value} onChange={event => {setButtonName(event.target.value); setInput2Value(event.target.value)}}></input>
  )
}