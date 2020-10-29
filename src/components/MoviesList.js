import React from 'react';
import MovieItem from './MovieItem';

function MoviesList({ movieList, toSearchString, handleBookmark, favorite }) {
  //making simple objects removing all the unused information
  let allMovies = movieList
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
        bookmark: favorite.includes(`${index}_${el.length}`) ? true : false,
      };
    });

  let likedList = allMovies.filter((el) => el.bookmark);
  let otherMovies = allMovies.filter((el) => !el.bookmark);

  const makingNodeList = (array) => {
    return array.map((el, index) => (
      <MovieItem
        key={`${el.id}_${index}`}
        id={el.id}
        imgUrl={el.imgUrl}
        title={el.title}
        bookmark={el.bookmark}
        handleBookmark={handleBookmark}
      />
    ));
  };

  //moving liked items to the top
  let filteredList = makingNodeList(likedList.concat(otherMovies));

  if (toSearchString) {
    filteredList = filteredList.filter(
      (el) =>
        el.props.title &&
        el.props.title
          .toString()
          .toLowerCase()
          .includes(toSearchString.toLowerCase())
    );
  }

  return <section className='main__list movie__list'>{filteredList}</section>;
}

export default MoviesList;
