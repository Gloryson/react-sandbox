import React, { useContext } from "react";
import { Context } from "./Provider";
import INSEC from "./INSEC";



export default function Sec () {

  const {gg, setgg} = useContext(Context);
  const {gg2, setgg2} = useContext(Context);

  return (
    <>
      <button onClick={() => setgg(gg + 1)}>GG</button>
      <button onClick={() => setgg2(gg2 + 2)}>GG2</button>
    <INSEC/>
    </>
  )
}