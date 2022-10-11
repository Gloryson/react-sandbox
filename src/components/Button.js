import React, { useContext } from "react";
import { Context } from "../store/AppProvider";

export default function Button () {

  const {dispatch} = useContext(Context);

  return (
    <button onClick={() => dispatch({type: `add`})}>Add</button>
  )
}