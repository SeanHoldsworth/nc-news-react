import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../utils';

import PageHeader from './PageHeader';
import ArticleList from './ArticleList';
import SortOptionsBar from './SortOptionsBar';

//export default function ArticleListPage({searchParams, setSearchParams}) {
export default function ArticleListPage() {
  const [articles, setArticles] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);

    getArticles(searchParams)
      .then(articles => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(true);
      });
  }, [searchParams]);

  if (isError) {
    return <h2>Failed to load data.</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (articles.length === 0) {
    return <p>There are no matching articles.</p>;
  }

  return (
    <div>
      <PageHeader />
      <SortOptionsBar
        searchParams = {searchParams}
        setSearchParams  = {setSearchParams}
      />
      <ArticleList
        articles = {articles}
      />
    </div>
  );
}