import React from "react";
import "./Pagination.css";

function Pagination({
  currentPage,
  setCurrentPage,
  indexOfLastItem,
  contacts,
}) {
  return (
    <>
      <div className="container__pagination">
        <button
          className="container__button"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="container__currentPage">{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= contacts.length}
          className="container__button--red"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
