import React from 'react';
import MovieItem from './MovieItem';

function MoviesList({ movieList, toSearchString }) {
  let editedList = movieList
    .filter((el) => {
      if (el) {
        return el;
      }
    })
    .map((el, index) => {
      return {
        id: `${index}_${el.length}`,
        imgUrl: el.poster_url,
        title: el.title,
        bookmark: false,
      };
    });

  let newFil = editedList.map((el, index) => {
    return (
      <MovieItem
        key={el.id}
        id={el.id}
        imgUrl={el.imgUrl}
        title={el.title}
        bookmark={el.bookmark}
      />
    );
  });
  if (toSearchString) {
    newFil = newFil.filter(
      (el) =>
        el.props.title &&
        el.props.title
          .toString()
          .toLowerCase()
          .includes(toSearchString.toLowerCase())
    );
  }

  return <section className='main__list movie__list'>{newFil}</section>;
}

export default MoviesList;
