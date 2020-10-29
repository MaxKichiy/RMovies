import React from 'react';

function SearchForm() {
  return (
    <form className='main__form'>
      <input type='text' placeholder='Search for a movie...' />
      <button type='button'>Search</button>
    </form>
  );
}

export default SearchForm;
