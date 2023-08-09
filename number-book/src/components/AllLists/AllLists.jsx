import React, { useEffect, useState } from "react";
import List from "../List/List";
import "./AllLists.css";
import { useSelector } from "react-redux";
import { selectForm } from "../store/formSlices/formSlice";

function AllLists() {
  const { contacts, favorite, search } = useSelector(selectForm);
  const [filteredContacts, setFilteredContacts] = useState([...contacts]);

  useEffect(() => {
    let filtered = [...contacts];

    if (search !== "") {
      filtered = filtered.filter(
        (cont) =>
          cont.name.toLowerCase().includes(search.toLowerCase()) ||
          cont.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (favorite) {
      filtered = filtered.filter((cont) => cont.favorite);
    }

    setFilteredContacts(filtered);
  }, [contacts, search, favorite]);

  return (
    <div className="container__allLists">
      {filteredContacts.map((el) => (
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
