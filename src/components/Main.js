import React from 'react';
import MoviesList from './MoviesList';
import SearchForm from './SearchForm';

function Main() {
  return (
    <section className='main'>
      <div className='main__wrapper'>
        <SearchForm />
        <MoviesList />
      </div>
    </section>
  );
}

export default Main;
