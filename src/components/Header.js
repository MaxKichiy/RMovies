import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';

function Header({ favoriteAmount, setSearchFile }) {
  const [offSet, setOffSet] = useState(0);

  const handleScroll = () => {
    setOffSet(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className='header'>
      <h1 className='header__title'>
        <a href='/'>
          <span>R</span>Movies
        </a>
      </h1>
      {offSet >= 100 && <SearchForm setSearchFile={setSearchFile} />}
      <ul className='header__nav nav'>
        <li className='nav__item'>
          <a href='https://github.com/MaxKichiy?tab=repositories'>Contacts</a>
        </li>
        <li className='nav__item'>
          <a href='https://github.com/MaxKichiy/RMovies'>GitHub</a>
        </li>
        <li className='nav__item'>
          <a href='/'>
            Bookmarks
            <span>{favoriteAmount > 0 ? `(${favoriteAmount})` : null}</span>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
