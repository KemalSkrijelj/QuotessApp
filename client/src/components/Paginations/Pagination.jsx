/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Pagination.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({ numOfPages, setPage, page }) => {
  const arr = [];

  for (let i = 1; i <= numOfPages; i++) {
    arr.push(i);
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        {" "}
        <FaArrowLeft />
      </button>
      {arr.map((value, index) => {
        const isPageActive = page === value;
        return (
          <button
            className="pagination-btn"
            key={index}
            style={{ backgroundColor: isPageActive ? "#136c6c" : "#9a908a", cursor:"pointer", color: "white" }}
            onClick={() => {
              setPage(value);
            }}
          >
            {value}
          </button>
        );
      })}
      <button
        className="pagination-btn"
        style={{cursor:"pointer"}}
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === numOfPages}
      >
        {" "}
        <FaArrowRight />{" "}
      </button>
    </div>
  );
};

export default Pagination;
