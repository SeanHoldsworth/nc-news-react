import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import ArticleListPage from './components/ArticleListPage';
import ArticlePage from './components/ArticlePage';
import FrontPage from './components/FrontPage';
import NewCommentPage from './components/NewCommentPage';

export default function App() {
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
      </Routes>
    </>
  )
}
