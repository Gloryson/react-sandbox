import React, { useContext } from "react";
import { Context } from "./Provider";
import INSEC from "./INSEC";



export default function Sec () {

  const [gg, setgg] = useContext(Context);

  return (
    <>
      <button onClick={() => setgg(gg + 1)}>BOM</button>
    <INSEC/>
    </>
  )
}