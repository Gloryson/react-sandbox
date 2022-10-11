import React from "react";
import AppProvider from "./components/AppProvider";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Input from "./components/Input";
import Input2 from "./components/Input2";




export default function App() {


  return (
    <AppProvider>
      <Button/>
      <Input/>
      <Button2/>
      <Input2/>
    </AppProvider>
  );
}