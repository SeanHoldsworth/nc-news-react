import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import { postComment } from '../utils';
import { UserContext } from '../contexts/User';

export default function CommentTextArea({article}) {
  const [commentContent, setCommentContent] = useState('');
  const [posted, setPosted] = useState(false);
  const navigate = useNavigate();

  const { username } = useContext(UserContext);

  function addComment(e) {
    e.preventDefault();
    setPosted(true);
    postComment(article.article_id, commentContent, username)
      .then(comment => {
        navigate(`/article/${article.article_id}`);
      });
  }

  return (
    <div className = "text-area">
      <form method = "post" onSubmit = {addComment}>
        <div className = "text-area-input">
        <textarea
          name = "commentContent"
          autoFocus
          onChange = {e => setCommentContent(e.target.value)}>
        </textarea>
        </div>
        <div className = "text-area-buttons">
          <button type = "submit" disabled = {posted}>Post</button>
          <Link to = {`/articles`}>
            <button type = "button"> Cancel </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
