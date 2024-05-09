import { updateSearchParams } from '../utils';

export default function OrderBy({searchParams, setSearchParams}) {
  const onOptionChange = e => {
    const order = e.target.value;
    setSearchParams(updateSearchParams(searchParams, 'order', order));
  }

  return (
    <div className = "article-sort-options">
      <p><span> Order By: </span></p>
      <form>
        <input
          type = "radio"
          name = "order"
          value = "asc"
          id = "asc"
          checked = {searchParams.get('order') === 'asc'}
          onChange = {onOptionChange}
        />
        <label htmlFor = "asc"> Ascending: </label>
        <input
          type = "radio"
          name = "order"
          value = "desc"
          id = "desc"
          checked = {searchParams.get('order') !== 'asc'}
          onChange = {onOptionChange}
        />
        <label htmlFor = "desc"> Descending: </label>
      </form> 
    </div>
  );
}