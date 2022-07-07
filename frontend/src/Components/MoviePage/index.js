import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
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
        // console.log(result.data);

        //      const res = result.data.map((elem)=>{
        //           favorites.map((elem1)=>{
        //             if(elem.id === elem1.id){
        //               elem.fav = true
        //             }else{elem.fav = false;
        //           }
        //           })
        //         })
        // console.log(res);
        setDetails(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToFav = (details) => {
    favorites.push(details);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const deleteFav = (id) => {
    let favList = favorites.filter((elem) => {
      return elem.id !== id;
    });
    localStorage.setItem("favorites", JSON.stringify(favList));
    setFavorites(favList);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      {details && (
        <div
          style={{
            opacity: "0.5",
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${details.poster_path})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "600px",
          }}
        >
          <Card style={{ width: "25rem" }}>
            <Container>
              <Row>
                <Col className="col-12 col-lg-3 col-md-6 col-sm-12">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                  />
                </Col>
                <Col className="col-12 col-lg-8 col-md-6 col-sm-12">
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
                    <Button
                      onClick={() => {
                        if (!favorites.length) {
                          addToFav(details);
                          console.log("add first");
                        } else {
                          favorites.map((elem) => {
                            if (elem.id === details.id && favorites.length) {
                              console.log("delete");
                              deleteFav(elem.id);
                            } else {
                              console.log("add");

                              addToFav(details);
                            }
                          });
                        }
                      }}
                      variant="success"
                    >
                      Add To Favorites
                    </Button>{" "}
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
