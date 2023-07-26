import React from "react";
import "./list.css";

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
}) {
  return (
    <div className="container__cart">
      <div className="container__cart-image">
        <span
          className={
            status === "Live" ? "container__live" : "container__offLine"
          }
        ></span>

        <img src={img} alt="" />
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
        <button className="container__button" onClick={() => onEdit(id)}>
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
