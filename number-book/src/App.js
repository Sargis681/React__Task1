import React, { useState, useRef } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import AllLists from "./components/AllLists/AllLists";

function App() {
  const [arr, setArr] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [front, setFront] = useState(true);

  const formRef = useRef();

  function handleEdit(id) {
    const itemToEdit = arr.find((item) => item.id === id);
    if (itemToEdit) {
      formRef.current.elements.name.value = itemToEdit.name;
      formRef.current.elements.surname.value = itemToEdit.surname;
      formRef.current.elements.email.value = itemToEdit.email;
      formRef.current.elements.number.value = itemToEdit.number;
      formRef.current.elements.img.value = itemToEdit.img;
      formRef.current.elements.status.value = itemToEdit.status;
      setEditingId(id);
    }
  }

  function handleDelete(id) {
    setArr(arr.filter((item) => item.id !== id));
  }
  function toggleFront() {
    setFront((prevFront) => !prevFront);
    console.log(front);
  }

  return (
    <div className="container">
      <div className="container__header">
        <h1>Number List</h1>
        <button onClick={toggleFront}>New Contacts</button>
      </div>
      {
        <div style={{opacity:front?"0":"1"}}>
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
      )

      <AllLists arr={arr} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
