import { useState, useEffect } from "react";
import "./QuotesCard.css";
import { FaThumbsUp, FaThumbsDown, FaTrash } from "react-icons/fa";

const QuotesCard = ({
  id,
  author,
  content,
  tags,
  onClick,
  upvotesCount,
  downvotesCount,
  isFetched, 
}) => {
  const [numOfLike, setNumOfLike] = useState(upvotesCount);
  const [numOfDislike, setNumOfDislike] = useState(downvotesCount);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);

  useEffect(() => {
    setNumOfLike(upvotesCount);
    setNumOfDislike(downvotesCount);
  }, [upvotesCount, downvotesCount]);

  const total = numOfLike + numOfDislike;
  const percentageLikes = total > 0 ? Math.floor((numOfLike / total) * 100) : 0;

  const color =
    percentageLikes <= 20
      ? "color1"
      : percentageLikes > 20 && percentageLikes <= 40
      ? "color2"
      : percentageLikes > 40 && percentageLikes <= 60
      ? "color3"
      : percentageLikes > 60 && percentageLikes <= 80
      ? "color4"
      : percentageLikes > 80 && percentageLikes <= 95
      ? "color5"
      : "color6";

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

  return (
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
          <p className={color}>{percentageLikes}%</p>
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
        <div className="author">
          <FaTrash onClick={() => onClick(id)} style={{ cursor: "pointer" }} />
          {author}
        </div>
      </div>
    </div>
  );
};

export default QuotesCard;
