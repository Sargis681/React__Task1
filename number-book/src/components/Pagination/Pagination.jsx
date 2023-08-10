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
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= contacts.length}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
