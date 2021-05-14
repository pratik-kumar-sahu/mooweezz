import React, { useEffect, useState } from "react";
import { API_KEY } from "../../keys";

function RightContainer({ setMovies, page, setPage }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("popular");
  const [totalPages, setTotalPages] = useState(null);

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;
  const MOVIES_API = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;

  useEffect(() => {
    fetchMovies(MOVIES_API);
  }, [category, page]);

  const fetchMovies = (input) => {
    fetch(input)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      fetchMovies(SEARCH_API + search);
    }
    setSearch("");
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const prevPage = () => {
    page > 1 && setPage(page - 1);
  };

  const nextPage = () => {
    console.log(totalPages);
    page < totalPages && setPage(page + 1);
  };

  return (
    <div className="right-container">
      <form onSubmit={handleSubmit}>
        <input
          className="right-container__search"
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="dropdown-and-pagination">
        <select
          className="right-container__dropdown"
          onChange={categoryHandler}
        >
          <option value="popular">Popularity</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
          <option value="now_playing">On Cinemas</option>
        </select>

        <div className="right-container__pagination">
          <button onClick={prevPage}>❮ Prev</button>
          <button onClick={nextPage}>Next ❯</button>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
