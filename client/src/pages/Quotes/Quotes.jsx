import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Quotes.css";
import QuotesCard from "../../components/QuotesCard/QuotesCard";
import Pagination from "../../components/Paginations/Pagination";

const Quotes = () => {
  const [data, setData] = useState(null);
  const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";
  const [page, setPage] = useState(1);

  const numOfQuotesPerPage = 6;
  const numOfQuotes = data ? data.quotes.length : 0;
  const numOfPages = Math.ceil(numOfQuotes / numOfQuotesPerPage);

  useEffect(() => {
    axios
      .get("http://localhost:8000/quotes", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(
          "Error fetching data. Please check the console for more details."
        );
      });
  }, [accessToken]);

  return (
    <>
      <div className="quotes-container">
        <div className="addToDo">
          <input
            className="input-todo"
            type="text"
            placeholder="Write a quote"
          />
          <input
            className="input-todo"
            type="text"
            placeholder="Write a author"
          />
          <button>Add</button>
        </div>
        <div className="quotes">
          {data ? (
            data.quotes

              .map((quote) => (
                <QuotesCard
                  key={quote.id}
                  author={quote.author}
                  content={quote.content}
                  tags={quote.tags}
                />
              ))
              .slice(numOfQuotesPerPage * (page - 1), numOfQuotesPerPage * page)
          ) : (
            <p style={{ fontSize: "30px" }}>Loading...</p>
          )}
        </div>
        <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
      </div>
    </>
  );
};

export default Quotes;
