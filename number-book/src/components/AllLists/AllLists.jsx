import React from "react";
import List from "../List/List";
import "./AllLists.css";
function AllLists({ arr, onDelete, onEdit }) {
  return (
    <div className="container__allLists">
      {arr.map((el) => (
        <List
          key={el.id}
          id={el.id}
          name={el.name}
          surName={el.surname}
          status={el.status}
          email={el.email}
          number={el.number}
          img={el.img}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default AllLists;
