import { useState, useEffect } from 'react';
import { getArticles } from '../utils';

import PageHeader from './PageHeader';
import ArticleHeader from './ArticleHeader';

export default function ArticleList() {
  const [articles, setArticles] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getArticles()
      .then(articles => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <h2>Failed to load data.</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (articles.length === 0) {
    return <p>There are no matching articles.</p>;
  }

  const articleList = articles.map(article =>
    <ArticleHeader key = {article.article_id} article = {article} />);

  return (
    <div>
      <PageHeader />
      <ul className = "article-list">
        {articleList}
      </ul>
    </div>
  );
}