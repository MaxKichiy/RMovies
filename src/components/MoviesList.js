import React from 'react';
import MovieItem from './MovieItem';
import Skeleton from '@material-ui/lab/Skeleton';

function MoviesList({
  movieList,
  toSearchString,
  handleBookmark,
  favorite,
  loading,
}) {
  //making simple objects removing all the unused information
  let newList = Array(10).fill('');
  let newArr = [];
  for (let item in newList) {
    newArr.push(
      <div style={{ display: 'flex', flexWrap: 'wrap', position: 'relative' }}>
        <Skeleton
          variant='rect'
          width={102}
          height={102}
          style={{ marginRight: '10px', marginTop: '10px' }}
        />
        <Skeleton
          variant='text'
          width='150px'
          height='20px'
          style={{ marginTop: '20px' }}
        />
        <Skeleton
          variant='text'
          width='300px'
          height='60px'
          style={{
            marginTop: '20px',
            position: 'absolute',
            left: '110px',
            top: '30px',
          }}
        />
      </div>
    );
  }

  console.log('newArr', newArr);

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

  return (
    <section className='main__list movie__list'>
      {loading ? newArr : filteredList}
    </section>
  );
}

export default MoviesList;
