import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const MoviePage = ({ favorites, setFavorites }) => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const getDetail = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
        console.log(result.data);
        setDetails(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToFav = (details) => {
    let favList = favorites;
    favList.push(details);
    setFavorites(favList);
    localStorage.setItem("favorites", JSON.stringify(favList));
  };

  const deleteFav = () => {
    let favList = favorites.filter((elem) => {
      return elem.id !== details.id;
    });
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      {details && (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${details.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "600px",
          }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            />
            <Card.Body style={{ opacity: "0.5" }}>
              <Card.Title>{details.original_title}</Card.Title>
              <Card.Text>{details.overview}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                IMDB RATING : {details.vote_average}
              </ListGroup.Item>
              <ListGroup.Item>
                Running time : {details.runtime}minutes{" "}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" onClick={addToFav}>
                <svg
                  style={{ color: "black" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
