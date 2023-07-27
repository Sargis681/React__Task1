import React, { useState, useRef } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import AllLists from "./components/AllLists/AllLists";

function App() {
  const [arr, setArr] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [front, setFront] = useState(true);
  const [mail, setMail] = useState(false);
  const [edit, setEdit] = useState(true);

  const formRef = useRef();

  function handleEdit(id) {
    console.log("barevner");
    setEdit(false);
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
  function editView() {
    setFront(false);
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
            mail={mail}
            setMail={setMail}
            edit={edit}
          />
        </div>
      }

      <AllLists
        editView={editView}
        arr={arr}
        onDelete={handleDelete}
        onEdit={handleEdit}
        mail={mail}
      />
    </div>
  );
}

export default App;
