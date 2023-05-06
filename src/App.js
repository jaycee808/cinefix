import React, { useState, useEffect } from 'react';

// API searches
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2f1ce84a1413ea3ccdba3439dfef68e2';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2f1ce84a1413ea3ccdba3439dfef68e2&query=';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  console.log(movies);

  // Call getMovies function
  useEffect(() => {
    getMovies(API_URL);
  }, []);

  // getMovies function
  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  // search terms
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    } else {
      window.location.reload();
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
      <h1 id="logo">cinefix.</h1>
      <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
    </>
  );
};

export default App;
