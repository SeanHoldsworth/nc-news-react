import { Link } from "react-router-dom";
import PageHeader from './PageHeader';

export default function FrontPage() {
  return (
    <>
      <PageHeader/>
      <h2> This will eventually be the landing page </h2>
      <Link to = '/articles'>
        <p> Click here to go to the list of all articles.</p>
      </Link>
      <Link to = '/topics'>
        <p> Click here to go to view all topics.</p>
      </Link>
    </>
  );
}