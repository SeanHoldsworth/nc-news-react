import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './nc-news.css'

import { UserProvider } from './contexts/User';
import { UsersProvider } from './contexts/Users';
import { TopicProvider } from './contexts/Topic';
import { TopicsProvider } from './contexts/Topics';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <UsersProvider>
      <TopicProvider>
        <TopicsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TopicsProvider>
      </TopicProvider>
    </UsersProvider>
  </UserProvider>
)
