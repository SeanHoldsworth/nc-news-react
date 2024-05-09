import { Route, Routes, useSearchParams } from 'react-router-dom';

import ArticleListPage from './components/ArticleListPage';
import ArticlePage from './components/ArticlePage';
import FrontPage from './components/FrontPage';
import NewCommentPage from './components/NewCommentPage';
import TopicListPage from './components/TopicListPage';

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: 'created_at'
  });

  return (
    <>
      <Routes>
        <Route
          path = '/'
          element = { <FrontPage /> }
        />
        <Route
          path = '/articles'
          element = {
             <ArticleListPage
              searchParams = {searchParams}
              setSearchParams = {setSearchParams}
            />
          }
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
          path = '/topics'
          element = { <TopicListPage /> }
        />
      </Routes>
    </>
  )
}
