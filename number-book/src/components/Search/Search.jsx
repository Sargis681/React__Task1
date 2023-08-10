import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchContacts, selectForm } from "../store/formSlices/formSlice";

function Search() {
  const { search } = useSelector(selectForm);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(searchContacts(event.target.value));
  };

  return (
    <input
      type="text"
      value={search}
      onChange={handleInputChange}
      placeholder="search..."
    />
  );
}

export default Search;
