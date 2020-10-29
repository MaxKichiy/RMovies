import React from 'react';

function Header({ favoriteAmount }) {
  return (
    <header className='header'>
      <h1 className='header__title'>
        <a href='/'>
          <span>R</span>Movies
        </a>
      </h1>
      <ul className='header__nav nav'>
        <li className='nav__item'>
          <a href='https://github.com/MaxKichiy?tab=repositories'>Contacts</a>
        </li>
        <li className='nav__item'>
          <a href='https://github.com/MaxKichiy/RMovies'>GitHub</a>
        </li>
        <li className='nav__item'>
          <a href='/'>{`Bookmarks(${favoriteAmount})`}</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
