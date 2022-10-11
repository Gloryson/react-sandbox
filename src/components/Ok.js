import React, { useContext } from "react";
import { Context } from "../store/AppProvider";

export default function Ok () {

  const {state, dispatch} = useContext(Context);

  return (
    <button className={state.visible ? `dd` : `off`} onClick={() => dispatch({type: `clickOk`})}>Ok</button>
  )
}