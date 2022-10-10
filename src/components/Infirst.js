import React, { useContext } from "react";
import { Context } from "../App";

export default function Infirst () {

  const [gg, setgg] = useContext(Context);

  return (
    <input value={gg} onChange={event => setgg(event.target.value)}></input>
  )
}