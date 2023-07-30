import React from "react";
import "./list.css";
import { useDispatch } from "react-redux";
import { deleteList, editForm,favoriteFunction } from "../store/formSlices/formSlice";

function List({ name, surName, email, number, id, img, status,favorite}) {
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    dispatch(favoriteFunction(id));
  };

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
          <span className="container__color">Number:</span> {number}
          {
          favorite ? (
            <p className="container__favorite" onClick={handleFavoriteClick}>
              ★
            </p>
          ) : (
            <p className="container__favorite" onClick={handleFavoriteClick}>
              ☆
            </p>
          )
        }
        </span>
      </div>
      <div className="container__buttons">
        <button
          className="container__button"
          onClick={() => dispatch(editForm(id))}
        >
          Edit
        </button>
        <button
          className="container__button--red"
          onClick={() => dispatch(deleteList(id))}
        >

          Delete
        </button>
      </div>
    </div>
  );
}

export default List;
