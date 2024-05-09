import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <nav className = "top-bar">
      <Link to = '/' className = "active"> Home </Link>
      <Link to = '/articles'> Articles </Link>
      <Link to = '/topics'> Topics </Link>
    </nav>
  );
}