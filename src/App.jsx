
import { useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getTopics } from './utils';

import ArticleListPage from './components/ArticleListPage';
import ArticlePage from './components/ArticlePage';
import NewCommentPage from './components/NewCommentPage';

import { TopicsContext } from './contexts/Topics';

export default function App() {
  const { setTopics } = useContext(TopicsContext);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getTopics()
      .then(topicsList => {
        setTopics(topicsList);
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(true);
      });
  }, []);

  if (isError)
    return <h2> Failed to load topic data. </h2>;

  if (isLoading)
    return <h2> Loading... </h2>;

  return (
    <>
      <Routes>
        <Route
          path = '/'
          element = { <ArticleListPage /> }
        />
        <Route
          path = '/articles'
          element = { <ArticleListPage /> }
        />
        <Route
          path = '/article/:article_id'
          element = { <ArticlePage /> }
        />
        <Route
          path = '/comment/:article_id'
          element = { <NewCommentPage /> }
        />
        <Route
          path = '*'
          element = { <ArticleListPage /> }
        />
      </Routes>
    </>
  )
}