import React from 'react';
import MovieItem from './MovieItem';

function MoviesList() {
  return (
    <section className='main__list movie__list'>
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </section>
  );
}

export default MoviesList;
