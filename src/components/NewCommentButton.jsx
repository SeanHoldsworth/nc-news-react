import { Link } from "react-router-dom";

export default function NewCommentButton({article}) {
  function addComment() {
  }

  return (
    <div className = "comment-button">
      <Link to = {`/comment/${article.article_id}`}>
        <button onClick = {addComment}> Add a comment </button>
      </Link>
    </div>
  );
}