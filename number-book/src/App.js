import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [arr, setArr] = useState([]);
  return (
    <div className="container">
      <Form arr={arr} setArr={setArr} />
    </div>
  );
}

export default App;
