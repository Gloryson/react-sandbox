import React, { useContext } from "react";
import { Context } from "./Provider";

export default function INSEC () {

  const [gg2] = useContext(Context);

  return (
    <p>{gg2}</p>
  )
}