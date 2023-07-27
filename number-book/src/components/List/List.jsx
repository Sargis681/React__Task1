import React from "react";
import "./list.css";
import { useDispatch, useSelector } from "react-redux";
import { selectForm } from "../store/formSlices/formSlice";

function List({
  name,
  surName,
  email,
  number,
  id,
  onDelete,
  onEdit,
  img,
  status,
  editView,
  mail,
}) {
  const form = useSelector(selectForm)
  console.log(form);
  return (
    <div className="container__cart">
      <div className="container__cart-image">
        <span
          className={
            status === "Live" ? "container__live" : "container__offLine"
          }
        ></span>

        <img
          src={
            img ? img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt=""
        />
      </div>
      <div className="container__cart-all">
        <span>
          <span className="container__color">Name:</span> {name}
        </span>
        <span>
          <span className="container__color">Surname:</span>
          {surName}
        </span>
        <span>
          <span className="container__color">Email:</span> {email}
        </span>
        <span>
          <span className="container__color"> Number:</span> {number}
        </span>
      </div>
      <div className="container__buttons">
        <button
          className="container__button"
          onClick={() => {
            onEdit(id);
            editView();
          }}
        >
          Edit
        </button>
        <button className="container__button--red" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default List;
