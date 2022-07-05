import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorites from "./Components/Favorites";
import MoviePage from "./Components/MoviePage";
import MoviesMenu from "./Components/MoviesMenu";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <MoviesMenu />
      <Routes>
        <Route path="/" element={<MoviesMenu />} />
        <Route path="/fav" element={<Favorites />} />
        <Route path="/movie_details" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
