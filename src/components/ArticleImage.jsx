export default function ArticleImage({article}) {
  return (
    <img
      className = "article-image"
      src = {article.article_img_url}
      alt = {article.topic}
    />
  );
}
