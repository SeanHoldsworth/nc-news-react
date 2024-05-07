import { Link } from "react-router-dom";

export default function ArticleHeader({article}) {
  return (
    <li className = "article-header">
      <Link to={`/article/${article.article_id}`}>
        <p>Subject: {article.title}</p>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
      </Link>
    </li>
  );
}