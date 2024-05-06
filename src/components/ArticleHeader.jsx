export default function ArticleHeader({article}) {
  return (
    <li className = "article">
      <p>Subject: {article.title}</p>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
    </li>
  );
}