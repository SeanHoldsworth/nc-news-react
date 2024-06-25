
import { useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getTopics, getUsers } from './utils';

import ArticleListPage from './components/ArticleListPage';
import ArticlePage from './components/ArticlePage';
import NewCommentPage from './components/NewCommentPage';

import { TopicsContext } from './contexts/Topics';
import { UsersContext } from './contexts/Users';

export default function App() {
  const { setTopics } = useContext(TopicsContext);
  const { setUsers } = useContext(UsersContext);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const makeRequest = request =>
    request()
      .catch(({ response: { data: { msg  }}}) => {
        setErrorMsg(msg);
        return Promise.reject(msg);
      });

  const requests = [makeRequest(getTopics), makeRequest(getUsers)];

  useEffect(() => {
    setIsLoading(true);

    Promise.all(requests)
      .then(([topicsList, usersList]) => {
        setTopics(topicsList);
        setUsers(usersList);
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(true);
      });
  }, []);

  if (isError)
    return <h2> Failed to load data. </h2>;

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