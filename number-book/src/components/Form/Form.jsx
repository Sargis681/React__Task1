import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addForm,
  saveEditedForm,
  selectForm,
} from "../store/formSlices/formSlice";
import "./form.css";

function Form() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const { formEdit, contacts } = useSelector(selectForm);
  // console.log(contacts);
  console.log(contacts);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(number) {
    const phoneRegex = /^\+?\d{3}-?\d{3}-?\d{3,4}$/;
    return phoneRegex.test(number);
  }

  useEffect(() => {
    if (formEdit) {
      const { name, surname, email, number, img, status } = formEdit;
      formRef.current.name.value = name;
      formRef.current.surname.value = surname;
      formRef.current.email.value = email;
      formRef.current.number.value = number;
      formRef.current.img.value = img;
      formRef.current.status.value = status;
    } else {
      formRef.current.reset();
    }
  }, [formEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const capName = formRef.current.name.value;
    const name = capName.charAt(0).toUpperCase() + capName.slice(1);
    const capSurNAme = formRef.current.surname.value;
    const surname = capSurNAme.charAt(0).toUpperCase() + capSurNAme.slice(1);
    const email = formRef.current.email.value;
    const number = formRef.current.number.value;

    const img =
      formRef.current.img.value ||
      "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    const status = formRef.current.status.value;

    if (!isValidEmail(email)) {
      formRef.current.email.value = "";
      formRef.current.email.placeholder = "Please enter a valid email address.";
      return;
    } else {
      formRef.current.email.placeholder = "Email...";
    }

    if (!isValidPhoneNumber(number)) {
      // alert("Please enter a valid phone number.");
      formRef.current.number.value = "";
      formRef.current.number.placeholder = "Please enter a valid phone number.";
      return;
    } else {
      formRef.current.number.placeholder = "0...";
    }

    if (name !== "" && surname !== "" && email !== "" && number !== "") {
      if (formEdit) {
        dispatch(
          saveEditedForm({
            name,
            surname,
            email,
            number,
            img,
            status,
            id: formEdit.id,
          })
        );
      } else {
        dispatch(
          addForm({
            name,
            surname,
            email,
            number,
            img,
            status,
            favorite: false,
            id: new Date().getTime().toString(),
          })
        );
      }
      formRef.current.reset();
    }
  };

  return (
    <>
      <form className="container__form" ref={formRef} onSubmit={handleSubmit}>
        <h1>Number List</h1>
        <div className="container__allinputs">
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
        </div>
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
