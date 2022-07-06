import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Card from "react-bootstrap/Card";

import "./style.css";
import MoviePage from "../MoviePage";
import { Navigate } from "react-router-dom";


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

  const getMoviePage = () => {
Navigate("/")
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="container">
    
      <Container>
        <Row>
          {list.length &&
            list.map((element, index) => {
              return (
                <Col className="col-12 col-lg-3 col-md-6 col-sm-12">
                  <Card>
                    <Link to={`/${element.id}`}><Card.Img
                    alt={element.title}
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                      style={{cursor:"pointer"}}
                      onClick={<moviePage/>}
                    /></Link>
                    <Card.Body>
                      <Card.Text>{element.original_title}</Card.Text>
                      <Card.Text>Vote Average : {element.vote_average}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default MoviesMenu;
