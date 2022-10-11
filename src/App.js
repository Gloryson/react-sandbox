import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Note from "./components/Note";
import Ok from "./components/Ok";
import AppProvider from "./store/AppProvider";




export default function App () {


  return (
    <AppProvider>
      <Note/>
      <Input/>
      <Ok/>
      <Button/>
    </AppProvider>
  );
}