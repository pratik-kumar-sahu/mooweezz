import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function FavouriteCard({ movie }) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
  const { dispatch } = useContext(UserContext);

  return (
    <div
      className="favourite-card"
      onClick={() => dispatch({ type: "DELETE_FAV", id: movie.id })}
    >
      <img
        className="favourite-card--cover"
        src={
          movie.poster_path
            ? IMAGE_PATH + movie.poster_path
            : "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        }
        alt={movie.title}
      />
    </div>
  );
}

export default FavouriteCard;
