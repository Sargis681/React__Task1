import React, { useRef } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { addForm, selectForm } from "../store/formSlices/formSlice";

function Form() {
  const { contacts } = useSelector(selectForm);
  const dispatch = useDispatch();
  const formRef = useRef(null);

  console.log(contacts);

  function handleChange(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    console.log(formData);

    let img = formData.get("img");

    if (img === "") {
      img = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    }
    if (formData.get("name") !== "" && formData.get("surname") !== "") {
      dispatch(
        addForm({
          name: formData.get("name"),
          surname: formData.get("surname"),
          email: formData.get("email"),
          number: formData.get("number"),
          img: formData.get("img"),
          status: formData.get("status"),
          id: new Date().getTime().toString(),
        })
      );
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
          Add
        </button>
      </form>
    </>
  );
}

export default Form;
