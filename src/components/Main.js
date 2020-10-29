import React from 'react';
import MoviesList from './MoviesList';
import SearchForm from './SearchForm';

function Main() {
  return (
    <section className='main'>
      <SearchForm />
      <MoviesList />
    </section>
  );
}

export default Main;
