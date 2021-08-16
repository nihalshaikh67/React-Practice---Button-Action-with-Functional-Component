import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [state,setState] = useState(false);

  const clicked = () =>{
    setState(true);
  }
  return (
    <div id="main">
     <button id="click" onClick = {clicked}>Click me</button>
     {state && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
