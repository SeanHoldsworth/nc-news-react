import { Link } from "react-router-dom";

export default function Topic({topic}) {
  return (
    <li className = "topic">
      <Link to={`/articles/?topic=${topic.slug}`}>
        <p>{topic.slug}</p>
      </Link>
      <p>{topic.description}</p>
    </li>
  );
}