import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState();

  const [searchFile, setSearchFile] = useState('');

  const handleBookmark = (id) => {
    if (favorite.includes(id)) {
      setFavorite((favorite) => favorite.filter((el) => el !== id));
    } else {
      setFavorite((favorite) => [...favorite, id]);
    }
  };

  useEffect(() => {
    let fullList = JSON.parse(localStorage.getItem('fullList') || '[]');
    let saved = JSON.parse(localStorage.getItem('favorite') || '[]');
    setFavorite(saved);
    setMovieList(fullList);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
    localStorage.setItem('fullList', JSON.stringify(movieList));
  }, [favorite, movieList]);

  console.log('App -> movieList', movieList);
  useEffect(() => {
    setLoading(true);
    axios.get('https://rmovies-c3416.firebaseio.com/data.json').then((res) => {
      setMovieList(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className='app'>
      <div className='app__wrapper'>
        <Header
          favoriteAmount={favorite.length}
          setSearchFile={setSearchFile}
        />
        <Main
          movieList={movieList}
          setSearchFile={setSearchFile}
          toSearchString={searchFile}
          favorite={favorite}
          handleBookmark={handleBookmark}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
