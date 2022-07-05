import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineHeart } from "react-icons/ai";
const MoviesMenu = () => {
  const [list, setList] = useState([]);

  const getAllMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((result) => {
        console.log(result.data.results);
        setList(result.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div>
      <Card.Title> Popular Movies</Card.Title>
      <Row xs={1} md={2} className="g-4">
        {list.length &&
          list.from({ length: 5 }).map((element, index) => {
            <Col>
              <Card>
                <Link to={element.id}>
                  <Card.Img
                    variant="top"
                    alt={element.title}
                    src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{element.original_title}</Card.Title>
                  <span>{element.vote_average}</span>
                  <AiOutlineHeart />
                </Card.Body>
              </Card>
            </Col>;
          })}
      </Row>
    </div>
  );
};

export default MoviesMenu;
