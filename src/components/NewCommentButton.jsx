import { Link } from "react-router-dom";

export default function NewCommentButton({article}) {
  return (
    <div className = "comment-button">
      <Link to = {`/comment/${article.article_id}`}>
        <button> Add a comment </button>
      </Link>
    </div>
  );
}