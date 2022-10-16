import React, { useContext } from "react";
import { Context } from "./store/context/AppProvider";

export default function Note () {

  const {dispatch} = useContext(Context);

  return (
    <button onClick={() => dispatch({type: `gg`})}>GO</button>
  )
}