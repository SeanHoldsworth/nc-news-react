import ArticleHeader from './ArticleHeader';

export default function ArticleList({articles}) {
  const articleList = articles.map(article =>
    <ArticleHeader
      key = {article.article_id}
      article = {article}
    />);

  return (
    <ul className = "article-list">
      {articleList}
    </ul>
  );
}