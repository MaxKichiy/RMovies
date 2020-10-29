import React from 'react';

function MovieItem() {
  return (
    <div className='main__item movie'>
      <div className='movie__image'>asd</div>
      <div className='movie__text'>
        <h2 className='movie__title'>Joker</h2>
        <p className='movie__description'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          magni odio praesentium illo, nesciunt beatae officia delectus laborum
          culpa dolorem numquam ut consequuntur nulla sint similique nisi
          voluptates perferendis minima!
        </p>
      </div>
      <span className='movie__like'>
        <input id='favorite' type='checkbox' />
        <label htmlFor='favorite'></label>
      </span>
    </div>
  );
}

export default MovieItem;
