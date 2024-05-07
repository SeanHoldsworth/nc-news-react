import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import ArticleList from './components/ArticleList';
import Article from './components/Article';

// import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path = '/articles'
          element = { <ArticleList /> }
        />
        <Route
          path = '/article/:article_id'
          element = { <Article /> }
        />
      </Routes>
    </>
  )
}
