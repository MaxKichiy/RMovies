import React from 'react';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>
        <a href='/'>
          <span>R</span>Movies
        </a>
      </h1>
      <ul className='header__nav nav'>
        <li className='nav__item'>
          <a href=''>Contacts</a>
        </li>
        <li className='nav__item'>
          <a href=''>News</a>
        </li>
        <li className='nav__item'>
          <a href=''>About</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
