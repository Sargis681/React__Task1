import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addForm, selectForm } from "../store/formSlices/formSlice";
import "./form.css";

function Form() {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const form = useSelector(selectForm);
  const formRef = useRef(null);

  function handleWrite(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = e.target.value;
    setVal(e.target.value);
    // Assuming you have some action to update the email field in the Redux store
  }

  function handleChange(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const surname = formData.get("surname");
    const email = formData.get("email");
    const number = formData.get("number");
    const img = formData.get("img");
    const status = formData.get("status");

    if (email !== "" && name !== "" && surname !== "" && number !== "") {
      dispatch(addForm({ name, surname, email, number, img, status }));
      formRef.current.reset();
    }
  }

  return (
    <>
      <form className="container__form" ref={formRef} onSubmit={handleChange}>
        <h1>Number List</h1>
        <input className="container__input" name="name" placeholder="Name..." />
        <input className="container__input" name="surname" placeholder="Surname..." />
        <input className="container__input" name="email" placeholder="Email..." onChange={handleWrite} />
        {/* Show email validation message here */}
        <input className="container__input" name="number" placeholder="+374..." />
        <input className="container__input" name="img" placeholder="img url.." />
        <select className="container__input" name="status">
          <option value="Live">Live</option>
          <option value="Offline">Offline</option>
        </select>
        <button className="container__add" type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;
