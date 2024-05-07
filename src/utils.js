import axios from 'axios';

const api = axios.create({
  baseURL: 'https://broken-news.onrender.com/api'
});

export function getArticles() {
  return api
    .get(`/articles`)
    .then(({ data: { articles: articles } }) => articles);
}

export function getArticle(article_id) {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data: { article: article } }) => article);
}

export function getComments(article_id) {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments: comments } }) => comments);
}

export function patchArticleVotes(article_id, incVotes) {
  return api
    .patch(`/articles/${article_id}`, {incVotes})
    .then(({ data: { article: article } }) => article);
}