import { Link } from "react-router-dom";

export default function ArticleHeader({article}) {
  const postTime = (new Date(article.created_at)).toUTCString();

  return (
    <li className = "article-header">
      <Link to={`/article/${article.article_id}`}>
        <p><span> Subject: </span> {article.title} </p>
        <p><span> Topic: </span> {article.topic} </p>
        <p><span> Author: </span> {article.author} </p>
        <p><span> Date: </span> {postTime} </p>
      </Link>
    </li>
  );
}