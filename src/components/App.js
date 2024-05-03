import React, {Component, useState} from "react";
import '../styles/App.css';
import Card from "./Card";

const App = () => {
  return (
    <div id="main">
      <Card name={"Abc"} description={"xyz"} />
      <Card name={"rdf"} description={"lhkjhk"} />
    </div>
  )
}


export default App;
