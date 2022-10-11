import React, { useContext } from "react";
import { Context } from "./AppProvider";

export default function Button () {

  const {state, dispatch} = useContext(Context);

  return (
    <button onClick={() => dispatch({type: `clickButton`})}>{state.buttonName}</button>
  )
}