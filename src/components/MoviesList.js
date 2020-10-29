import React from 'react';
import MovieItem from './MovieItem';

function MoviesList({ movieList }) {
  console.log(movieList);
  let newList = movieList.map((el, index) => {
    return (
      <MovieItem
        id={`${index}_${el.length}`}
        key={`${index}_${el.length}`}
        imgUrl={el.poster_url}
        title={el.title}
      />
    );
  });
  console.log(newList);
  return <section className='main__list movie__list'>{newList}</section>;
}

export default MoviesList;
