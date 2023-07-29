import React, { useState, useRef } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import AllLists from "./components/AllLists/AllLists";

function App() {
  const [arr, setArr] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [front, setFront] = useState(true);
  const formRef = useRef();
console.log("dasasddsaasddassda");
  function toggleFront() {
    setFront((prevFront) => !prevFront);
  }

  return (
    <div className="container">
      <div className="container__header">
        <h1>Number List</h1>
        <button onClick={toggleFront}>New Contacts</button>
      </div>
      {
        <div
          className="container__formHead"
          style={{ display: front ? "none" : "block" }}
        >
          <Form
            editingId={editingId}
            setEditingId={setEditingId}
            formRef={formRef}
            arr={arr}
            setArr={setArr}
            setFront={setFront}
          />
        </div>
      }

      <AllLists />
    </div>
  );
}

export default App;
