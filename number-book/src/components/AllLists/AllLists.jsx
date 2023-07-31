import React, { useEffect } from "react";
import List from "../List/List";
import "./AllLists.css";
import { useDispatch, useSelector } from "react-redux";
import { addForm, selectForm } from "../store/formSlices/formSlice";

function AllLists() {
  const { contacts, favorite, filteredContacts } = useSelector(selectForm);


  // console.log(contacts);
  return (
    <div className="container__allLists">
      {favorite
        ? filteredContacts
            .filter((el) => el.favorite === true)
            .map((el) => (
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
            ))
        : filteredContacts.map((el) => (
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
