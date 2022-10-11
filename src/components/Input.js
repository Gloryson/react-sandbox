import React, { useContext } from "react";
import { Context } from "./AppProvider";

export default function Input () {

  const {state, dispatch} = useContext(Context);

  return (
    <input value={state.inputValue} onChange={event => dispatch({type: 'onChange', text: event.target.value})}></input>
  )
}