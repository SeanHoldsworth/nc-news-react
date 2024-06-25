import { useContext } from 'react';
import { UserContext } from '../contexts/User';

export default function LogoutButton() {
  const { setUsername } = useContext(UserContext);

  const logout = () => {
    setUsername('');
  };

  return (
    <button
      className = "top-bar-logout"
      onClick = {logout}>
        Logout
    </button>
  );
}