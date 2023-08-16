import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchContacts, selectForm } from "../store/formSlices/formSlice";
import "./Search.css";
import User from "../User/User";
function Search() {
  const { search, user } = useSelector(selectForm);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(searchContacts(event.target.value));
  };

  return (
    <div className="container__search--all">
      <input
        className="container__search"
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="search..."
      />
      <User />
    </div>
  );
}

export default Search;
