import React, { useEffect, useState } from "react";
import List from "../List/List";
import "./AllLists.css";
import { useSelector } from "react-redux";
import { selectForm } from "../store/formSlices/formSlice";
import Pagination from "../Pagination/Pagination";

function AllLists() {
  const { contacts, favorite, search, user } = useSelector(selectForm);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  console.log(user);

  // console.log(user);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredContacts = contacts.filter((cont) => {
    if (search !== "") {
      return (
        cont.name.toLowerCase().includes(search.toLowerCase()) ||
        cont.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (favorite) {
      return cont.favorite;
    }
    return true;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [search, favorite]);

  const displayContacts = filteredContacts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <div className="container__allLists">
        {displayContacts
          .filter((el) => el._id === user.id)
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
          ))}
      </div>
      {contacts.length > 0 ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          indexOfLastItem={indexOfLastItem}
          contacts={filteredContacts}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default AllLists;
