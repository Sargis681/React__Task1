import React, { useState } from "react";
import "./form.css";

function Form({
  setArr,
  formRef,
  editingId,
  setEditingId,
  setFront,
  mail,
  setMail,
  edit,
}) {
  const [val, setVal] = useState("");

  function handleWrite(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = e.target.value;
    setVal(e.target.value);
    setMail(emailRegex.test(emailValue));
  }

  function handleChange(e) {
    e.preventDefault();
    setFront((prev) => true);
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
      setFront((prev) => true);

      setArr((prevArr) =>
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
      setArr((prevArr) => [
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
          placeholder="Email..."
          onChange={handleWrite}
        />
        {edit ? (
          <span style={{ color: mail ? "blue" : "red" }}>
            {mail
              ? "dzer mail@ tisht e"
              : val !== ""
              ? "dzer mail@ sxal e"
              : ""}
          </span>
        ) : (
          ""
        )}

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
