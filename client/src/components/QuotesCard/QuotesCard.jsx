import { useState } from "react";
import "./QuotesCard.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
const QuotesCard = ({ author, content, tags }) => {
  const [numOfLike, setNumOfLike] = useState(3);
  const [numOfDislike, setNumOfDislike] = useState(2);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);

  const handleLikeClick = () => {
    if (!isLikeActive) {
      setNumOfLike(numOfLike + 1);
      setIsLikeActive(true);
      if (isDislikeActive) {
        setNumOfDislike(numOfDislike - 1);
        setIsDislikeActive(false);
      }
    }
  };

  const handleDislikeClick = () => {
    if (!isDislikeActive) {
      setNumOfDislike(numOfDislike + 1);
      setIsDislikeActive(true);
      if (isLikeActive) {
        setNumOfLike(numOfLike - 1);
        setIsLikeActive(false);
      }
    }
  };

  const total = numOfLike + numOfDislike;
  const percentageLikes = total > 0 ? Math.floor((numOfLike / total) * 100) : 0;
  return (
    <>
      <div className="card">
        <div className="leftSide">
          <FaThumbsUp
            style={{
              cursor: "pointer",
              color: isLikeActive ? "green" : "white",
            }}
            onClick={handleLikeClick}
          />
          <div className="percentage">
            <p>{percentageLikes}%</p>
            <p>
              {numOfLike}/{numOfDislike}
            </p>
          </div>
          <FaThumbsDown
            style={{
              cursor: "pointer",
              color: isDislikeActive ? "red" : "white",
            }}
            onClick={handleDislikeClick}
          />
        </div>
        <div className="rightSide">
          <div className="content">{content}</div>
          <div className="author">{author}</div>
        </div>
      </div>
    </>
  );
};

export default QuotesCard;
