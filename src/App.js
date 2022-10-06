import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

function App() {
  const url =
    "http://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608";
  const urlSearch =
    "http://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608&query=";

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [term]);
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(urlSearch + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };
  return (
    <div className="App">
      <div className="search-nav">
        <div className="movie-title">
          <h1>Movies</h1>
          <div>
            <form onSubmit={handleSearch}>
              <input onChange={(e) => setTerm(e.target.value)} />
              <button>Search</button>
            </form>
          </div>
        </div>
        <div className="movies">
          {movies &&
            movies.map((movie) => {
              return <MovieCard {...movie} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
