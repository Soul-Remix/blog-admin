import './comment-card.css';

const CommentCard = ({ comments, handleDelete }) => {
  const commentsArr = comments.map((comment) => {
    return (
      <div className="comment-card" key={comment._id}>
        <div className="comment-flex">
          <p className="comment-user">{comment.userName}</p>
          <small className="comment-date">{comment.createdAt}</small>
        </div>
        <p className="comment-body">{comment.description}</p>
        <button
          className="comment-delete-btn"
          onClick={() => handleDelete(comment._id)}
        >
          Delete
        </button>
      </div>
    );
  });
  return commentsArr;
};

export default CommentCard;
