import React, { useRef } from 'react';

function SearchForm({ setSearchFile }) {
  // console.log(inputRef && inputRef.current.value);
  // console.log(searchFile);

  const handler = () => {
    setSearchFile(inputRef.current.value);
  };
  const inputRef = useRef();

  return (
    <div className='main__form'>
      <input ref={inputRef} type='text' placeholder='Search for a movie...' />
      <button onClick={handler}>Search</button>
    </div>
  );
}

export default SearchForm;
