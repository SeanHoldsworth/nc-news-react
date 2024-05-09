import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle, getComments } from '../utils';

import PageHeader from './PageHeader';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import NewCommentButton from './NewCommentButton';
import ArticleVotes from './ArticleVotes';
import CommentList from './CommentList';

export default function ArticlePage() {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const requests = [getArticle(article_id), getComments(article_id)];

  useEffect(() => {
    setIsLoading(true);

    Promise.all(requests)
      .then(([article, comments]) => {
        setArticle(article);
        setComments(comments);
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <h2>Failed to load data.</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <PageHeader />
      <ArticleHeader key = {article_id} article = {article} />
      <ArticleBody article = {article} />
      <NewCommentButton article = {article} />
      <ArticleVotes article = {article} setArticle = {setArticle} />
      <CommentList comments = {comments} setComments = {setComments} />
    </>
  );
}