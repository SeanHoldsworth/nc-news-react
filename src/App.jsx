import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import ArticleList from './components/ArticleList';

// import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path = '/articles'
          element = { <ArticleList /> }
        />
      </Routes>
    </>
  )
}
