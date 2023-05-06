import React, { useState, useEffect } from 'react';

// API searches
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2f1ce84a1413ea3ccdba3439dfef68e2';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2f1ce84a1413ea3ccdba3439dfef68e2&query=';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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


  return (
    <>
      <header>
      <h1 id="logo">cinefix.</h1>
      </header>
    </>
  );
};

export default App;
