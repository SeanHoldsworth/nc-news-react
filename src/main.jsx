import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './nc-news.css'

import { UserProvider } from './contexts/User';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
)
