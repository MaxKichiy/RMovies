import React from 'react';
import MoviesList from './MoviesList';
import SearchForm from './SearchForm';

function Main({ movieList }) {
  return (
    <section className='main'>
      <div className='main__wrapper'>
        <SearchForm />
        <MoviesList movieList={movieList} />
      </div>
    </section>
  );
}

export default Main;
