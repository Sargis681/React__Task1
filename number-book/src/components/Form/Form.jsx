import React, { useRef } from "react";
import "./form.css";

function Form({ arr, setArr, formRef, editingId, setEditingId, setFront }) {
  const emailRef = useRef();

  function handleChange(e) {
    e.preventDefault();
    setFront(false);
    const formData = new FormData(formRef.current); // Ensure formRef is not null before using it
    const name = formData.get("name");
    const surname = formData.get("surname");
    const email = formData.get("email");
    const number = formData.get("number");
    const img = formData.get("img");
    const status = formData.get("status");
    const id = new Date().getTime().toString();

    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (editingId) {
      setArr(
        arr.map((item) => {
          if (item.id === editingId) {
            setFront(true);
            return {
              name: name,
              surname: surname,
              email: email,
              number: number,
              id: item.id,
              img: img,
              status: status,
            };
          }
          return item;
        })
      );
      setEditingId(null);
    } else if (
      emailRegex.test(email) && // Check if the email matches the regex pattern
      name !== "" &&
      surname !== "" &&
      email !== "" &&
      number !== ""
    ) {
      setArr([
        ...arr,
        {
          name: name,
          surname: surname,
          email: email,
          number: number,
          img: img,
          status: status,
          id: id,
        },
      ]);
    }
    formRef.current.reset();
  }

  return (
    <>
      <form className="container__form" ref={formRef} onSubmit={handleChange}>
        <h1>Number List</h1>
        <input className="container__input" name="name" placeholder="Name..." />
        <input
          className="container__input"
          name="surname"
          placeholder="Surname..."
        />
        <input
          className="container__input"
          name="email"
          ref={emailRef}
          placeholder="Email..."
        />
        <input
          className="container__input"
          name="number"
          placeholder="+374..."
        />
        <input
          className="container__input"
          name="img"
          placeholder="img url.."
        />
        <select className="container__input" name="status">
          <option value="Live">Live</option>
          <option value="Offline">Offline</option>
        </select>
        <button className="container__add" type="submit">
          {editingId ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
}

export default Form;
