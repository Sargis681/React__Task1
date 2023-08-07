import React from "react";
import List from "../List/List";
import "./AllLists.css";
import { useSelector } from "react-redux";
import { selectForm } from "../store/formSlices/formSlice";

function AllLists() {
  const { pageNumber, favorite, filteredContacts } = useSelector(selectForm);

  const filteredList = favorite
    ? filteredContacts.filter((el) => el.favorite === true)
    : filteredContacts;

  const startIndex = (pageNumber - 1) * 2;
  const endIndex = startIndex + 2;

  const displayedContacts = filteredList.slice(startIndex, endIndex);

  return (
    <div className="container__allLists">
      {displayedContacts.map((el) => (
        <List
          key={el.id}
          id={el.id}
          name={el.name}
          surName={el.surname}
          status={el.status}
          email={el.email}
          number={el.number}
          img={el.img}
          favorite={el.favorite}
        />
      ))}
    </div>
  );
}

export default AllLists;
