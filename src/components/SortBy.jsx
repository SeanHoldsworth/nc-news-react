import { updateSearchParams } from '../utils';

export default function SortBy({searchParams, setSearchParams}) {
  const onOptionChange = e => {
    const sort_by = e.target.value;
    setSearchParams(updateSearchParams(searchParams, 'sort_by', sort_by));
  }

  return (
    <div className = "article-sort-options">
      <p><span> Sort By: </span></p>
      <form>
        <input
          type = "radio"
          name = "sort_by"
          value = "created_at"
          id = "created_at"
          checked = {searchParams.get('sort_by') !== 'votes'}
          onChange = {onOptionChange}
        />
        <label htmlFor = "date"> Date </label>
        <input
          type = "radio"
          name = "sort_by"
          value = "votes"
          id = "votes"
          checked = {searchParams.get('sort_by') === 'votes'}
          onChange = {onOptionChange}
        />
        <label htmlFor = "votes"> Votes </label>
      </form> 
    </div>
  );
}
