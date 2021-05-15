import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import UserContextProvider from "./contexts/UserContext";
import { useState } from "react";
import "./App.scss";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState("");

  return (
    <div className="main-container">
      <UserContextProvider>
        <LeftContainer
          movies={movies}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
        <RightContainer
          movies={movies}
          setMovies={setMovies}
          page={page}
          setPage={setPage}
          setSelectedMovie={setSelectedMovie}
        />
      </UserContextProvider>
    </div>
  );
}

export default App;
