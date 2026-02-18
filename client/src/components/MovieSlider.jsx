import { useState } from 'react';
import'../css/MovieSlider.css'

function MovieSlider() {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    if (!text) return; // avoid empty searches
    try {
      const response = await fetch(`/movies?query=${encodeURIComponent(text)}`);
      const data = await response.json();
      setMovies([data]); // wrap single OMDB movie in array
    } catch (err) {
      console.error(err);
      alert("Error fetching movie: " + err.message);
    }
  };

  return (
    <div className="movieSlide">
      <div className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Enter a movie you want to search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="search-button" onClick={getMovies}>Search</button>
      </div>

      <div className="movies-grid">
        {movies.length > 0 &&
          movies.map((movie) => (
            <article key={movie.imdbID} className="movie-card">
              {movie.Poster && movie.Poster !== "N/A" && (
                <img src={movie.Poster} alt={movie.Title} />
              )}
              <h3>{movie.Title}</h3>
              <p><strong>Year:</strong> {movie.Year}</p>
              <p><strong>Genre:</strong> {movie.Genre}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Actors:</strong> {movie.Actors}</p>
              <p><strong>Plot:</strong> {movie.Plot}</p>
              <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
            </article>
          ))}
      </div>
    </div>
  );
}

export default MovieSlider;
