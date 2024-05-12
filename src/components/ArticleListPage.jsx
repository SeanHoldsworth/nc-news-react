import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../utils';

import PageHeader from './PageHeader';
import ArticleList from './ArticleList';
import SortOptionsBar from './SortOptionsBar';
import Status from './Status';
import Error from './Error';

import { TopicContext } from '../contexts/Topic';
import { TopicsContext } from '../contexts/Topics';

export default function ArticleListPage() {
  const [articles, setArticles] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const { topic, setTopic } = useContext(TopicContext);
  const { topics } = useContext(TopicsContext);

  const description = topic ?
    topics.filter(t => t.slug === topic)[0].description : '';

  useEffect(() => {
    setTopic(searchParams.get('topic'));
    setIsLoading(true);

    getArticles(searchParams)
      .then(articles => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(true);
      });
  }, [searchParams]);

  if (isError)
    return <Error> Failed to load data. </Error>;

  if (isLoading)
    return <Status> Loading... </Status>;

  if (articles.length === 0)
    return <p>There are no matching articles.</p>;

  return (
    <div>
      <PageHeader />
      <SortOptionsBar
        searchParams = {searchParams}
        setSearchParams  = {setSearchParams}
      />
      <h2> {description} </h2>
      <ArticleList
        articles = {articles}
      />
    </div>
  );
}