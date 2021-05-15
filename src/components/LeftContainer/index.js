import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { API_KEY } from "../../keys";
import MovieCard from "../MovieCard/MovieCard";

function LeftContainer({ movies, selectedMovie, setSelectedMovie }) {
  const { favourites, dispatch } = useContext(UserContext);
  const [reviews, setReviews] = useState(null);
  const dummy = useRef();

  const REVIEWS_API = `https://api.themoviedb.org/3/movie/${selectedMovie.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    selectedMovie &&
      fetch(REVIEWS_API)
        .then((res) => res.json())
        .then((data) => setReviews(data.results));
  }, [selectedMovie]);

  const scrollOnTop = () => {
    if (dummy.current) {
      dummy.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const favouriteHandler = (id) => {
    const foundMovie = favourites.filter((favourite) => favourite.id === id);
    if (foundMovie.length === 0) {
      dispatch({ type: "ADD_FAV", favourite: { ...selectedMovie } });
    } else {
      dispatch({ type: "DELETE_FAV", id: selectedMovie.id });
    }
  };

  return (
    <div id="left-container" className="left-container">
      {selectedMovie ? (
        <div className="left-container__main" ref={dummy}>
          <img
            className="left-container__main--cover"
            alt={selectedMovie.title}
            src={
              selectedMovie.poster_path
                ? IMAGE_PATH + selectedMovie.poster_path
                : "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            }
          />
          <div className="left-container__main--extra">
            <div className="left-container__main--extra-add">
              <button
                className="left-container__main--extra-add--btn"
                onClick={() => favouriteHandler(selectedMovie.id)}
              >
                {favourites.filter((e) => e.data.id === selectedMovie.id).length
                  ? "Remove ❤️"
                  : "Add ❤️"}
              </button>
            </div>
            <div className="left-container__main--extra-reviews">
              <div style={{ marginLeft: "1rem" }}>
                Reviews 👉 {reviews && reviews.length}
              </div>
              {reviews &&
                reviews.map((review) => (
                  <div className="reviews" key={review.id}>
                    <div className="reviews-author">{review.author}</div>
                    <div className="reviews-content">
                      <em>{review.content}</em>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : null}
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            movies={movies}
            setSelectedMovie={setSelectedMovie}
            scrollOnTop={scrollOnTop}
          />
        ))
      ) : (
        <div style={{ color: "white", fontSize: "1.6rem" }}>
          No movies found
        </div>
      )}
    </div>
  );
}

export default LeftContainer;
