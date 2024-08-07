import "./QuotesCard.css";
const QuotesCard = ({ author, content, tags }) => {
  return (
    <>
      <div className="card">
        <div className="content">{content}</div>
        <div className="author">{author}</div>
        <div className="tags">#{tags}</div>
      </div>
    </>
  );
};

export default QuotesCard;
