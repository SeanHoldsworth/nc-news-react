import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle, getComments } from '../utils';

import PageHeader from './PageHeader';
import ArticleHeader from './ArticleHeaderText';
import ArticleBody from './ArticleBody';
import NewCommentButton from './NewCommentButton';
import ArticleVotes from './ArticleVotes';
import CommentList from './CommentList';
import ArticleImage from './ArticleImage';
import Status from './Status';
import Error from './Error';

export default function ArticlePage() {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  // Requests for both the article and the comments can be made at the same
  // time using Promise.all but each request must have its own error handler
  // or else React will see an unresolved promise.

  const makeRequest = (request, article_id) =>
     request(article_id)
      .catch(({ response: { data: { msg  }}}) => {
        setErrorMsg(msg);
        return Promise.reject(msg);
      });

  useEffect(() => {
    const requests = [
      makeRequest(getArticle, article_id),
      makeRequest(getComments, article_id)
    ];

    setIsLoading(true);

    Promise.all(requests)
      .then(([article, comments]) => {
        setArticle(article);
        setComments(comments);
        setIsLoading(false);
      })
      .catch(error => {
        setErrorMsg('Failed to load data.');
    });
  }, []);

  if (errorMsg) {
    return <Error> {errorMsg} </Error>;
  }

  if (isLoading) {
    return <Status> Loading... </Status>;
  }

  return (
    <div className = "article">
      <PageHeader />
      <ArticleHeader article = {article} />
      <ArticleImage article = {article} />
      <ArticleBody article = {article} />
      <NewCommentButton article = {article} />
      <ArticleVotes article = {article} setArticle = {setArticle} />
      <CommentList comments = {comments} setComments = {setComments} />
    </div>
  );
}