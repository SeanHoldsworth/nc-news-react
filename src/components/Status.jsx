import PageHeader from './PageHeader';

export default function Status({children}) {
  return (
    <>
      <PageHeader />
      <div className = "status-message">
        <h2>{children}</h2>
      </div>
    </>
  );
}