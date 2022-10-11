import React from "react";
import AppProvider from "./components/AppProvider";
import Button from "./components/Button";
import Input from "./components/Input";




export default function App() {


  return (
    <AppProvider>
      <Button/>
      <Input/>
    </AppProvider>
  );
}