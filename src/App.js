import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchFile, setSearchFile] = useState('');

  // const searchHandler = (string) => {
  //   setSearchFile(string);
  // };

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
    setError(false);
    if (movieList.length < 1) {
      axios
        .get('https://rmovies-c3416.firebaseio.com/data.json')
        .then((res) => setMovieList(res.data));
    }
  }, []);
  return (
    <div className='app'>
      <div className='app__wrapper'>
        <Header favoriteAmount={favorite.length} />
        <Main
          movieList={movieList}
          setSearchFile={setSearchFile}
          toSearchString={searchFile}
          favorite={favorite}
          handleBookmark={handleBookmark}
        />
      </div>
    </div>
  );
}

export default App;
