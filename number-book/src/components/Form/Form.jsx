import React, { useRef } from "react";
import "./form.css";

function Form({ arr, setArr, formRef, editingId, setEditingId, front, setFront }) {
  const emailRef = useRef();

  function handleChange(e) {
    e.preventDefault();
    setFront(prev => !prev); // Toggle the value of front
    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const surname = formData.get("surname");
    const email = formData.get("email");
    const number = formData.get("number");
    const img = formData.get("img");
    const status = formData.get("status");
    const id = new Date().getTime().toString();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (editingId) {
      setFront(prev => !prev);
      setArr(prevArr => 
        prevArr.map((item) => {
          if (item.id === editingId) {
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
      emailRegex.test(email) &&
      name !== "" &&
      surname !== "" &&
      email !== "" &&
      number !== ""
    ) {
      setArr(prevArr => [
        ...prevArr,
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
        <button  className="container__add" type="submit">
          {editingId ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
}

export default Form;
