import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [favorite, setFavorite] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

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
    let saved = JSON.parse(localStorage.getItem('favorite') || '[]');
    setFavorite(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    // setLoading(true);
    // setError(false);
    axios
      .get('https://rmovies-c3416.firebaseio.com/data.json')
      .then((res) => setMovieList(res.data));
  }, []);
  return (
    <div className='app'>
      <div className='app__wrapper'>
        <Header />
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
