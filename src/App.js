import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorites from "./Components/Favorites";
import MoviePage from "./Components/MoviePage";
import MoviesMenu from "./Components/MoviesMenu";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

function App() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [movie , setMovie] = useState([])
  return (
    <div className="App">
      <NavBar favorites={favorites} setFavorites={setFavorites} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Home movie={movie} setMovie={setMovie}/>
              <MoviesMenu movie={movie} setMovie={setMovie}/>
            </>
          }
        />

        <Route path="/fav" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />

        <Route
          path="/movie/:id"
          element={
            <MoviePage favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
