import axios from 'axios';

const api = axios.create({
  baseURL: 'https://broken-news.onrender.com/api'
});

export function getArticles() {
  return api
    .get(`/articles`)
    .then(({ data: { articles: articles } }) => articles);
}