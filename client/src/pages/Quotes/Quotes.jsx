import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Quotes.css";
import QuotesCard from "../../components/QuotesCard/QuotesCard";
import Pagination from "../../components/Paginations/Pagination";
import Modal from "../../components/Modal/Modal";

const Quotes = () => {
  const [data, setData] = useState({ quotes: [] });
  const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [inputValueAuthor, setInputValueAuthor] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const numOfQuotesPerPage = 6;
  const numOfQuotes = data.quotes.length;
  const numOfPages = Math.ceil(numOfQuotes / numOfQuotesPerPage);

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

    if (storedQuotes.length === 0 || shouldRefresh) {
      axios
        .get("http://localhost:8000/quotes", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const fetchedQuotes = response.data.quotes;
          setData({ quotes: fetchedQuotes });
          localStorage.setItem("quotes", JSON.stringify(fetchedQuotes));
          setShouldRefresh(false);
        })
        .catch((error) => {
          setModalMessage(
            "Error fetching data. Please check the console for more details."
          );
          setModalVisible(true);
        });
    } else {
      setData({ quotes: storedQuotes });
    }
  }, [accessToken, shouldRefresh]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChangeAuthor = (event) => {
    setInputValueAuthor(event.target.value);
  };

  const addQuote = () => {
    if (inputValue.trim() && inputValueAuthor.trim()) {
      const newQuote = {
        id: Date.now(),
        content: inputValue,
        author: inputValueAuthor,
        upvotesCount: 0, 
        downvotesCount: 0, 
        isFetched: false, 
      };

      const isDuplicate = data.quotes.some(
        (quote) =>
          quote.content === newQuote.content && quote.author === newQuote.author
      );

      if (!isDuplicate) {
        const updatedQuotes = [...data.quotes, newQuote];

        setData({ quotes: updatedQuotes });
        localStorage.setItem("quotes", JSON.stringify(updatedQuotes));

        setInputValue("");
        setInputValueAuthor("");
        setModalMessage("Quote added successfully!");
        setModalVisible(true);
      } else {
        setModalMessage("This quote already exists.");
        setModalVisible(true);
      }
    } else {
      setModalMessage("Please write quote and author.");
      setModalVisible(true);
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const deleteQuote = (id) => {
    const updatedQuotes = data.quotes.filter((quote) => quote.id !== id);
    setData({ quotes: updatedQuotes });
    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
  };

  const restoreAllQuotes = () => {
    setShouldRefresh(true);
  };

  return (
    <>
      <div className="quotes-container">
        <div className="addToDo">
          <div className="adding">
            <input
              className="input-todo"
              value={inputValue}
              type="text"
              placeholder="Write a quote"
              onChange={handleInputChange}
            />
            <input
              className="input-todo"
              value={inputValueAuthor}
              type="text"
              placeholder="Write an author"
              onChange={handleInputChangeAuthor}
            />
            <button onClick={addQuote}>Add</button>
          </div>
          <button
            className="restoreQuotes"
            onClick={restoreAllQuotes}
            style={{ backgroundColor: data.length < 5 ? "#1d2121" : "#008000" }}
          >
            Restore all quotes
          </button>
        </div>
        <div className="quotes">
          {data.quotes.length > 0 ? (
            data.quotes
              .map((quote) => (
                <QuotesCard
                  key={quote.id}
                  upvotesCount={quote.upvotesCount}
                  downvotesCount={quote.downvotesCount}
                  id={quote.id}
                  author={quote.author}
                  content={quote.content}
                  tags={quote.tags}
                  onClick={deleteQuote}
                  isFetched={quote.isFetched}
                />
              ))
              .slice(numOfQuotesPerPage * (page - 1), numOfQuotesPerPage * page)
          ) : (
            <p style={{ fontSize: "30px" }}>Loading...</p>
          )}
        </div>
        <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
      </div>

      {modalVisible && (
        <Modal
          isVisible={modalVisible}
          onClose={closeModal}
          message={modalMessage}
        />
      )}
    </>
  );
};

export default Quotes;
