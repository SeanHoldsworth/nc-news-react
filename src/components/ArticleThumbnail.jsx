import { Link } from "react-router-dom";

export default function ArticleThumbnail({article}) {
  return (
    <Link to={`/article/${article.article_id}`}>
      <img
        className = "article-thumbnail"
        src = {article.article_img_url}
        alt = {article.topic}
      />
    </Link>
  );
}
    