import axios from 'axios';

const api = axios.create({
  baseURL: 'https://broken-news.onrender.com/api'
});

export function getArticles(searchParams) {
  let path = '/articles';

  const topic = searchParams.get('topic');

  if (topic)
    path += `?topic=${topic}`;
  
  console.log(path);
  return api
    .get(path)
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

export function postComment(article_id, comment, username) {
  const commentData = {
    username: username,
    body: comment
  };

  return api
    .post(`/articles/${article_id}/comments`, commentData)
    .then(({data: { comment: comment } }) => comment);
}

export function deleteComment(comment_id) {
  return api
    .delete(`/comments/${comment_id}`);
}

export function getTopics() {
  return api
    .get('/topics')
    .then(({ data: { topics } }) => topics);
}