import React, { useContext } from "react";
import { Context } from "../store/AppProvider";

export default function Input () {

  const {state, dispatch} = useContext(Context);

  return (
    <input className={state.visible ? `dd` : `off`} 
           value={state.inputValue}
           onChange={event => dispatch({type: `inputValue`, text: event.target.value})}
           ref={input => input && input.focus()}>
    </input>
  )
}