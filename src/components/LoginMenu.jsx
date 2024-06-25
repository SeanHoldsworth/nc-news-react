import { useContext } from 'react';
import { Link } from "react-router-dom";

import { UserContext } from '../contexts/User';
import { UsersContext } from '../contexts/Users';

export default function LoginMenu() {
  const { setUsername } = useContext(UserContext);
  const { users } = useContext(UsersContext);

  const login = username => {
    setUsername(username);
  };

  const logins = users.map(user => {
    const username = user.username;

    return (
      <Link key = {username}
      onClick = {() => login(username)}>
        {username}
      </Link>
    );
  });

  return (
    <div className = "login-dropdown">
      <button className = "login-dropdown-button"> Login </button>
      <div className = "login-dropdown-content">
        {logins}
      </div>
    </div>
  );
}