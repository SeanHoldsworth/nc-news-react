        import PageHeader from './PageHeader';

        export default function Error({children}) {
          return (
            <>
              <PageHeader />
              <div className = "error-message">
                <h2>{children}</h2>
              </div>
            </>
          );
        }