import React, { useEffect, useState } from "react";
import { API_KEY } from "../../keys";

function LeftContainer() {
  const [movies, setMovies] = useState([]);

  const MOVIES_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
  const IMAGES = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetch(MOVIES_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, [MOVIES_API]);

  return (
    <div className="left-container">
      {movies.length &&
        movies.map((movie) => (
          <div key={movie.id} className="left-container__movies">
            <img
              className="left-container__movies--cover"
              src={IMAGES + movie.poster_path}
              alt={movie.title}
            />
          </div>
        ))}
    </div>
  );
}

export default LeftContainer;
