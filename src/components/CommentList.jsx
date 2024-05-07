import Comment from './Comment';

export default function CommentList({comments}) {

  if (comments.length === 0)
    return <p>(This article has no comments yet)</p>;

  const commentList = comments.map(comment =>
    <Comment key = {comment.comment_id} comment = {comment} />);

  return (
    <div>
      <ul className = "comment-list">
        {commentList}
      </ul>
    </div>
  );
}