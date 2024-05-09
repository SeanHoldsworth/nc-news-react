import { useState, useEffect } from 'react';
import { getTopics } from '../utils';

import PageHeader from './PageHeader';
import Topic from './Topic';

export default function TopicList() {
  const [topics, setTopics] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getTopics()
      .then(topics => {
        setTopics(topics);
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

  const topicList = topics.map(topic =>
    <Topic key = {topic.slug} topic = {topic} />);

  return (
    <div>
      <PageHeader />
      <ul className = "topic-list">
        {topicList}
      </ul>
    </div>
  );
}