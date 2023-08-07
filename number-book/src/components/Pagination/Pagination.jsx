import React, { useEffect } from "react";
import "./Pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { functionPagination, selectForm } from "../store/formSlices/formSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { contacts, pageNumber } = useSelector(selectForm);

  const contactsPerPage = 2; // Количество контактов на странице
  const totalPages = Math.ceil(contacts.length / contactsPerPage);

  const goToPage = (pageNumber) => {
    dispatch(functionPagination(pageNumber));
  };

  // Автоматически переходить на предыдущую страницу, если текущая страница стала пустой
  useEffect(() => {
    if (contacts.length === 0 && pageNumber > 1) {
      goToPage(pageNumber - 1);
    }
  }, [contacts, pageNumber]);

  return (
    <div className="container__pagination">
      <div className="container__pages">
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
            onClick={() => goToPage(i + 1)}
            className={
              pageNumber === i + 1
                ? "container__page--active"
                : "container__page"
            }
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
