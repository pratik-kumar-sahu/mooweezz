import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const IMAGES = "https://image.tmdb.org/t/p/w1280";

  // useEffect(() => {
  //   fetch(MOVIES_API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data.results);
  //     });
  // }, [MOVIES_API]);

  return (
    <div className="main-container">
      <LeftContainer movies={movies} IMAGE_PATH={IMAGES} />
      <RightContainer
        movies={movies}
        setMovies={setMovies}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
