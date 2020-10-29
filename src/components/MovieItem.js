import React from 'react';

function MovieItem({ imgUrl, title, id, bookmark, handleBookmark }) {
  return (
    <div className='main__item movie'>
      <div className='movie__image'>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='movie__text'>
        <h2 className='movie__title'>{title}</h2>
        <p className='movie__description'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          magni odio praesentium illo, nesciunt beatae officia delectus laborum
          culpa dolorem numquam ut consequuntur nulla sint similique nisi
          voluptates perferendis minima!
        </p>
      </div>
      <span className='movie__like'>
        <input
          onChange={() => handleBookmark(id)}
          id={id}
          type='checkbox'
          defaultChecked={bookmark}
        />
        <label htmlFor={id}></label>
      </span>
    </div>
  );
}

export default MovieItem;
