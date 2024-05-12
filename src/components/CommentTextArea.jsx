import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import { postComment } from '../utils';
import { UserContext } from '../contexts/User';

export default function CommentTextArea({article}) {
  const [commentContent, setCommentContent] = useState('');
  const [posted, setPosted] = useState(false);
  const [empty, setEmpty] = useState(true);
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

  // Monitor the "Post" button so that it is disabled if there is no
  // comment content. It will also be disabled once pressed.

  function contentChangeHandler(e) {
    const content = e.target.value;
    setEmpty(content.trim().length === 0); 
    setCommentContent(content);
  }

  return (
    <div className = "text-area">
      <form method = "post" onSubmit = {addComment}>
        <div className = "text-area-input">
        <textarea
          name = "commentContent"
          autoFocus
          onChange = {contentChangeHandler}>
        </textarea>
        </div>
        <div className = "text-area-buttons">
          <button
            type = "submit"
            disabled = {posted || empty}>
              Post
          </button>
          <Link to = {`/articles`}>
            <button type = "button"> Cancel </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
