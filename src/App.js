import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import UserContextProvider from "./contexts/UserContext";
import { useState } from "react";
import "./App.scss";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <div className="main-container">
      <UserContextProvider>
        <LeftContainer movies={movies} />
        <RightContainer
          movies={movies}
          setMovies={setMovies}
          page={page}
          setPage={setPage}
        />
      </UserContextProvider>
    </div>
  );
}

export default App;
