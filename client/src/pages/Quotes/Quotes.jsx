import React, { useEffect, useState } from "react";
import axios from "axios";
import './Quotes.css'
import QuotesCard from "../../components/QuotesCard/QuotesCard";
const Quotes = () => {
  const [data, setData] = useState(null);
  const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655"; // Primer tokena

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
      <div className="quotes">
        {data ? (
          data.quotes.map((quote) => (
            <QuotesCard
              key={quote.id}
              author={quote.author}
              content={quote.content}
              tags={quote.tags}
            />
          ))
        ) : (
          <p style={{ fontSize: "30px" }}>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Quotes;
