import { Link } from "react-router-dom";

export default function LoginMenu() {
  const label = 'Login';

  return (
    <div className = "login-dropdown">
      <button className = "login-dropdown-button"> {label} </button>
      <div className = "login-dropdown-content">
        <Link to = "#"> Test </Link>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}