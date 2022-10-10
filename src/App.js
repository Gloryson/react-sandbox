import React from "react";
import First from "./components/First";
import ALL from "./components/Provider";
import Sec from "./components/Sec";




export default function App() {


  return (
    <ALL>
      <First/>
      <Sec/>
    </ALL>
  );
}