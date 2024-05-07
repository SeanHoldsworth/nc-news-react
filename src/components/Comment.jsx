export default function Comment({comment}) {
  return (
    <li className = "comment">
      <p>Author: {comment.author}</p>
      <p>{comment.body}</p>
    </li>
  );
}