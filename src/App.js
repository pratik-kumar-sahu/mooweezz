import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import { API_KEY } from "./keys";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const IMAGES = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetch(MOVIES_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [MOVIES_API]);

  return (
    <div className="main-container">
      <LeftContainer movies={movies} IMAGE_PATH={IMAGES} />
      <RightContainer setMovies={setMovies} />
    </div>
  );
}

export default App;
