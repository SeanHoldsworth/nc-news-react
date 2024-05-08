import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PageHeader from './PageHeader';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import CommentTextArea from './CommentTextArea';

import { getArticle } from '../utils';

export default function NewComment() {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getArticle(article_id)
      .then(article => {
        setArticle(article);
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
    <div className = "new-comment">
      <PageHeader />
      <ArticleHeader key = {article_id} article = {article} />
      <ArticleBody article = {article} />
      <CommentTextArea article = {article} />
    </div>
  );
}