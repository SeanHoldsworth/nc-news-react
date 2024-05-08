import { Link } from "react-router-dom";

export default function ArticleHeader({article}) {
  const postTime = (new Date(article.created_at)).toUTCString();

  return (
    <li className = "article-header">
      <Link to={`/article/${article.article_id}`}>
        <p><strong> Subject: </strong> {article.title} </p>
        <p><strong> Topic: </strong> {article.topic} </p>
        <p><strong> Author: </strong> {article.author} </p>
        <p><strong> Date: </strong> {postTime} </p>
      </Link>
    </li>
  );
}