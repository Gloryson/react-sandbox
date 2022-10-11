import React, { useContext } from "react";
import { Context } from "./AppProvider";

export default function Input () {

  const {inputValue, setInputValue, setButton2Name} = useContext(Context);

  return (
    <input value={inputValue} onChange={event => {setButton2Name(event.target.value); setInputValue(event.target.value)}}></input>
  )
}