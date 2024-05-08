import Comment from './Comment';

// The props will need to be passed down to the child Comment component so
// that removing a comment can trigger a rerender of the ArticlePage.

export default function CommentList({comments, setComments}) {

  if (comments.length === 0)
    return <p>(This article has no comments yet)</p>;

  const commentList = comments.map(comment =>
    <Comment
      key = {comment.comment_id}
      comment = {comment}
      comments = {comments}
      setComments = {setComments}
    />);

  return (
    <ul className = "comment-list">
      {commentList}
    </ul>
  );
}