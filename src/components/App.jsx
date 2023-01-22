import React from "react";
import Hook from "./Hook";
import "../components-css/App.css";

export function About() {
  return <h1>You are at About Directory.</h1>;
}

export function App() {
  return (
    <div className="App-div">
      <h1>Hello</h1>
      <Hook />
    </div>
  );
}
