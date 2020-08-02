import React from "react";
import Expandable from "./Expandable";
import "./App.css";

function App() {
  return (
    <Expandable>
      <Expandable.Header> Header </Expandable.Header>
      <Expandable.Icon />
      <Expandable.Body> This is the content </Expandable.Body>
    </Expandable>
  );
}

export default App;
