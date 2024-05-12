import { useContext } from 'react';

import { UserContext } from '../contexts/User';
import { deleteComment } from '../utils';

// The comments and setComments props are passed down from the grandparent
// component ArticlePage so that a rerender can be triggered if the comment
// is deleted.

export default function Comment({comment, comments, setComments}) {
  const { username } = useContext(UserContext);

  const canDelete = comment.author === username;

  function removeComment() {
    deleteComment(comment.comment_id)
      .then(() => {
        const remainingComments = comments.filter(
          c => c.comment_id !== comment.comment_id);
        setComments(remainingComments);
      });
  }

  const postTime = (new Date(comment.created_at)).toUTCString();

  return (
    <li className = "comment">
      <div className = "comment-left">
        { canDelete && 
          <div className = "comment-delete-button">
            <button
              type="button"
              onClick = {removeComment}> 
                X
              </button>
          </div>
        }
      </div>
      <div className = "comment-right">
        <p><span>{`Posted by ${comment.author} on ${postTime}`}</span></p>
        <p>{comment.body}</p>
      </div>
    </li>
  );
}