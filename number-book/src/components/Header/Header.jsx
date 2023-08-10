import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoriteSort, selectForm } from "../store/formSlices/formSlice";
import Form from "../Form/Form";
import Search from "../Search/Search";

function Header() {
  const [front, setFront] = useState(true);
  const formRef = useRef();
  const { favorite } = useSelector(selectForm);
  const dispatch = useDispatch();

  function toggleFront() {
    setFront((prevFront) => !prevFront);
  }

  const handleClick = () => {
    dispatch(favoriteSort());
  };

  return (
    <div>
      <div className="container__header">
        <h1>Number List</h1>
        <button className="container__contacts" onClick={toggleFront}>
          New Contacts
        </button>
        <button className="container__favorites" onClick={handleClick}>
          {favorite ? "All" : "Favorites"}{" "}
        </button>
        <Search />
      </div>
      <div
        className="container__formHead"
        style={{ display: front ? "none" : "block" }}
      >
        <Form formRef={formRef} setFront={setFront} />
      </div>
    </div>
  );
}

export default Header;
