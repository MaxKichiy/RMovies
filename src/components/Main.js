import React from 'react';
import MoviesList from './MoviesList';
import SearchForm from './SearchForm';

function Main({
  favorite,
  movieList,
  setSearchFile,
  toSearchString,
  handleBookmark,
}) {
  return (
    <section className='main'>
      <div className='main__wrapper'>
        <SearchForm setSearchFile={setSearchFile} />
        <MoviesList
          movieList={movieList}
          toSearchString={toSearchString}
          favorite={favorite}
          handleBookmark={handleBookmark}
        />
      </div>
    </section>
  );
}

export default Main;
