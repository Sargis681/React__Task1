import React from "react";
import List from "../List/List";
import "./AllLists.css";
import { useSelector } from "react-redux";
import { selectForm } from "../store/formSlices/formSlice";
function AllLists({ arr, onDelete, onEdit, editView, mail }) {
  const { contacts } = useSelector(selectForm);
  return (
    <div className="container__allLists">
      {contacts.map((el) => (
        <List
          key={el.id}
          id={el.id}
          name={el.name}
          surName={el.surname}
          status={el.status}
          email={el.email}
          number={el.number}
          img={el.img}
        />
      ))}
    </div>
  );
}

export default AllLists;
