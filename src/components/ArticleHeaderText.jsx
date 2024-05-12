import { Link } from "react-router-dom";

export default function ArticleHeaderText({article}) {
  const postTime = (new Date(article.created_at)).toUTCString();
  const topicLink =
    <Link
     to = {`/articles?topic=${article.topic}`}>
      {article.topic}
    </Link>;

  return (
    <li className = "article-header-text">
      <Link to={`/article/${article.article_id}`}>
        <p className = "article-title"> {article.title} </p>
      </Link>
      <p>
        Posted by {article.author} on {postTime} in {topicLink}
      </p>
      <p>{article.votes} {article.votes === 1 ? 'like' : 'likes'}</p>
    </li>
  );
}