import SortBy from './SortBy';
import OrderBy from './OrderBy';

export default function SortOptionsBar({searchParams, setSearchParams}) {
  return (
    <div className = "article-sort-bar">
      <SortBy
        searchParams = {searchParams}
        setSearchParams = {setSearchParams}
      />
      <OrderBy
        searchParams = {searchParams}
        setSearchParams = {setSearchParams}
      />
    </div>
  );
}