import React from "react";
import Note from "./Note";
import AppProvider from "./store/context/AppProvider";




export default function App () {


  return (
    <AppProvider>
      <Note/>
    </AppProvider>
  );
}