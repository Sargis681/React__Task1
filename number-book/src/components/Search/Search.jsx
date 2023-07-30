import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, selectForm } from "../store/formSlices/formSlice";

function Search() {
  const { search } = useSelector(selectForm); // Get the search state from the Redux store
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <input
      type="text"
      value={search} // Bind the input value to the search state
      onChange={handleInputChange} // Add this event handler to update the state when the user types
      placeholder="search..."
    />
  );
}

export default Search;
