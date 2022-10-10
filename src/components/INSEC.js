import React, { useContext } from "react";
import { Context } from "../App";

export default function INSEC () {

  const [gg, setgg] = useContext(Context);

  return (
    <p>{gg}</p>
  )
}