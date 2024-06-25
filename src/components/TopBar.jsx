import { useContext } from 'react';
import { Link } from "react-router-dom";

import { TopicContext } from '../contexts/Topic';
import { TopicsContext } from '../contexts/Topics';
import { UserContext } from '../contexts/User';

import LoginMenu from './LoginMenu';
import LogoutButton from './LogoutButton';

export default function TopBar() {
  const { topic } = useContext(TopicContext);
  const { topics } = useContext(TopicsContext);
  const { username } = useContext(UserContext);

  const topicList = topics.map(({ slug: slug }) =>
    <Link 
      to = {`/articles?topic=${slug}`}
      className = {topic === slug ? "active" : "inactive"}
      key = {slug}>
        {slug[0].toUpperCase() + slug.slice(1)}
    </Link>
  );

  const loggedUser = <span className = "top-bar-user"> {username} </span>;

  return (
    <nav className = "top-bar">
      <Link
        to = '/'
        className = {!topic ? "active" : "inactive"}>
          Home
      </Link>
      {topicList}
      {username ? <LogoutButton /> : <LoginMenu />}
      {loggedUser}
    </nav>
  );
}