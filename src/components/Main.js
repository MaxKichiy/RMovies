import React from 'react';
import MoviesList from './MoviesList';
import SearchForm from './SearchForm';

function Main({ movieList, setSearchFile, toSearchString }) {
  return (
    <section className='main'>
      <div className='main__wrapper'>
        <SearchForm setSearchFile={setSearchFile} />
        <MoviesList movieList={movieList} toSearchString={toSearchString} />
      </div>
    </section>
  );
}

export default Main;
