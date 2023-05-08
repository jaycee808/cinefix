import React, { useState, useEffect } from 'react';

// API searches
const MOVIE_API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2f1ce84a1413ea3ccdba3439dfef68e2';
const MOVIE_IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const MOVIE_SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2f1ce84a1413ea3ccdba3439dfef68e2&query=';
const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  console.log(movies);

  // Call getMovies function
  useEffect(() => {
    getMovies(MOVIE_API_URL);
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
      getMovies(MOVIE_SEARCH_API + searchTerm);
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
      <main>
        {movies.map((movie) => {
          const { id, title, poster_path, overview, vote_average } = movie;

          return (
            <div key={id} className="movie">
              <img src={MOVIE_IMG_PATH + poster_path} alt={title} />
              <div className="movie-info">
                <h3>{title}</h3>
              </div>
              <div className="movie-rating">
                <h3>IMDb Rating: {vote_average}</h3>
              </div>
              <div className="overview">
                <h3>Overview</h3>
                <p>{overview}</p>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default App;