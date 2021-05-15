import React from "react";

function MovieCard({ movie, movies, setSelectedMovie }) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

  const setColors = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  const clickHandler = (id) => {
    setSelectedMovie(movies.filter((movie) => movie.id === id)[0]);
  };

  return (
    <div
      id="movie-btn"
      key={movie.id}
      onClick={() => clickHandler(movie.id)}
      className="left-container__movies"
    >
      <img
        className="left-container__movies--cover"
        src={
          movie.poster_path
            ? IMAGE_PATH + movie.poster_path
            : "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        }
        alt={movie.title}
      />
      <div className="left-container__movies--info">
        <h3>
          {movie.title.length > 10
            ? movie.title.substring(0, 10) + "..."
            : movie.title}
        </h3>
        <h3
          className={`left-container__movies--info-rating ${setColors(
            movie.vote_average
          )}`}
        >
          {movie.vote_average}
        </h3>
      </div>
      <div className="left-container__movies--hover">
        <div>
          <div className="left-container__movies--hover-title">
            {movie.title}
          </div>
          “<em>{movie.overview}</em>”
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
