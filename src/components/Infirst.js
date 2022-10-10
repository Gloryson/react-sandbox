import React, { useContext } from "react";
import { Context } from "./Provider";

export default function Infirst () {

  const {gg2} = useContext(Context);

  return (
    <input value={gg2}></input>
  )
}