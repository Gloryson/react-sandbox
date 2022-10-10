import React, { useContext } from "react";
import { Context } from "./Provider";

export default function INSEC () {

  const {gg} = useContext(Context);

  return (
    <p>{gg}</p>
  )
}