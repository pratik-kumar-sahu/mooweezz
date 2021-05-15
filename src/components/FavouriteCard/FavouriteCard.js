import React from "react";

function FavouriteCard({ favMovie, movies, setSelectedMovie }) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

  const clickHandler = () => {
    setSelectedMovie(favMovie);
  };

  return (
    <div className="favourite-card" onClick={clickHandler}>
      <img
        className="favourite-card--cover"
        src={
          favMovie.poster_path
            ? IMAGE_PATH + favMovie.poster_path
            : "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        }
        alt={favMovie.title}
      />
    </div>
  );
}

export default FavouriteCard;
