import React, { useContext } from "react";
import { Context } from "../store/AppProvider";

export default function Note () {

  const {state, dispatch} = useContext(Context);

  return (
    <>
      {state.notesArray.map(note => {
        return <div key={note.id}>
                <div>{note.value}</div>
                <div onClick={() => dispatch({type: `edit`, id: note.id, value: note.value})}>Ed</div>
                <div onClick={() => dispatch({type: `del`, id: note.id})}>Del</div>
              </div>
      })}
    </>
  )
}