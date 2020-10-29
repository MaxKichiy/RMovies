import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [movieList, setMovieList] = useState([]);
  // const [favorite, setFavorite] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const [searchFile, setSearchFile] = useState('');

  // const searchHandler = (string) => {
  //   setSearchFile(string);
  // };

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
        />
      </div>
    </div>
  );
}

export default App;
