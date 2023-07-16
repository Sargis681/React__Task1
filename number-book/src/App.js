import React, { useState,useRef } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [arr, setArr] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const formRef = useRef();

  return (
    <div className="container">
      <Form editingId = {editingId} setEditingId = {setEditingId} formRef={formRef} arr={arr} setArr={setArr} />
    </div>
  );
}

export default App;
