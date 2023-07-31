import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchContacts,
  searchFilter,
  selectForm,
} from "../store/formSlices/formSlice";

function Search() {
  const { search } = useSelector(selectForm);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(searchContacts(event.target.value));
  };

  useEffect(() => {
    dispatch(searchFilter());
  }, [search, dispatch]); // Add dispatch to the dependency array

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
