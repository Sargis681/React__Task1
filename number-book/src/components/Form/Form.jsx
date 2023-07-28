import React, { useRef } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addForm,
  saveEditedForm,
  selectForm,
} from "../store/formSlices/formSlice";

function Form() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const { formEdit } = useSelector(selectForm);

  function handleChange(e) {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    let img = formData.get("img");

    if (img === "") {
      img = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    }

    if (
      formData.get("name") !== "" &&
      formData.get("surname") !== "" &&
      formData.get("email") !== "" &&
      formData.get("number") !== ""
    ) {
      if (formEdit) {
        dispatch(
          saveEditedForm({
            name: formData.get("name"),
            surname: formData.get("surname"),
            email: formData.get("email"),
            number: formData.get("number"),
            img: img,
            status: formData.get("status"),
            id: formEdit.id,
          })
        );
      } else {
        dispatch(
          addForm({
            name: formData.get("name"),
            surname: formData.get("surname"),
            email: formData.get("email"),
            number: formData.get("number"),
            img: img,
            status: formData.get("status"),
            id: new Date().getTime().toString(),
          })
        );
      }
    }

    formRef.current.reset();
  }
  function clearFunction() {
    formRef.current.name = "";
  }

  if (formEdit) {
    const { name, surname, email, number, img, status } = formEdit;
    return (
      <>
        <form className="container__form" ref={formRef} onSubmit={handleChange}>
          <h1>Number List</h1>
          <input
            className="container__input"
            name="name"
            placeholder="Name..."
            defaultValue={name}
            required
          />
          <input
            className="container__input"
            name="surname"
            placeholder="Surname..."
            defaultValue={surname}
            required
          />
          <input
            className="container__input"
            name="email"
            placeholder="Email..."
            defaultValue={email}
            required
          />
          <input
            className="container__input"
            name="number"
            placeholder="+374..."
            defaultValue={number}
            required
          />
          <input
            className="container__input"
            name="img"
            placeholder="img url.."
            defaultValue={img}
          />
          <select
            className="container__input"
            name="status"
            required
            defaultValue={status}
          >
            <option value="Live">Live</option>
            <option value="Offline">Offline</option>
          </select>
          <button
            className="container__add"
            type="submit"
            onClick={clearFunction}
          >
            Save
          </button>
        </form>
      </>
    );
  }

  return (
    <>
      <form className="container__form" ref={formRef} onSubmit={handleChange}>
        <h1>Number List</h1>
        <input
          className="container__input"
          name="name"
          placeholder="Name..."
          required
        />
        <input
          className="container__input"
          name="surname"
          placeholder="Surname..."
          required
        />
        <input
          className="container__input"
          name="email"
          placeholder="Email..."
          required
        />
        <input
          className="container__input"
          name="number"
          placeholder="+374..."
          required
        />
        <input
          className="container__input"
          name="img"
          placeholder="img url.."
        />
        <select className="container__input" name="status" required>
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
