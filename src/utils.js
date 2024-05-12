import axios from 'axios';

// Utility function to create an updated searchParams object which
// can be passed to setSearchParams.

export const updateSearchParams = (searchParams, key, value) =>
  Object.assign({},
    [...searchParams.entries()].reduce(
        (o, [key, value]) => ({ ...o, [key]: value }),
        {}
    ),
    { [key]: value });

const api = axios.create({
  baseURL: 'https://broken-news.onrender.com/api'
});

// The extra logic in the getArticles function below is concerned with
// simplifying the query path where possible.

export function getArticles(searchParams) {
  let path = '/articles';
  let queryStarted = false;

  const topic = searchParams.get('topic');

  if (topic) {
    path += `?topic=${topic}`;
    queryStarted = true;
  }

  const sort_by = searchParams.get('sort_by');

  if (sort_by && sort_by !== 'created_at') {
    path += queryStarted ? '&' : '?';
    path += `sort_by=${sort_by}`;
    queryStarted = true;
  }

  const order = searchParams.get('order');

  // The sort order will be passed and have a value of 'asc' or 'desc'.

  if (queryStarted || order === 'asc') {
    if (order) {
      path += queryStarted ? '&' : '?';
      path += `order=${order}`;
    }
  }
  
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