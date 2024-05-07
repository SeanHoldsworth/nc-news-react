import { Link } from "react-router-dom";
import PageHeader from './PageHeader';

export default function FrontPage() {
  return (
    <>
      <PageHeader/>
      <h1> This will eventually be the landing page </h1>
      <Link to = '/articles'>
        <p> Click here to go to the article list.</p>
      </Link>
    </>
  );
}