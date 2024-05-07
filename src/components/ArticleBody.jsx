export default function ArticleBody({article}) {
  return (
    <div className = "article-body">
      <p>{article.body}</p>
    </div>
  );
}