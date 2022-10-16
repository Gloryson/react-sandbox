import React, { useContext, useEffect } from "react";
import { Context } from "./store/context/AppProvider";

export default function Note () {

  const {state, dispatch} = useContext(Context);
  useEffect(() => console.log(state.array))

  return (
    <button onClick={() => dispatch({type: `gg`})}>GO</button>
  )
}