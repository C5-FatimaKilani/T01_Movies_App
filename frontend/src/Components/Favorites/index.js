import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
const Favorites = () => {
const delFav = () => {
     myFav.filter((elem) => {
        return elem.id !== myFav.id;
      });
}

  const myFav = JSON.parse(localStorage.getItem("favorites"));
  console.log(myFav);
  return (
    <div>
      <Container>
        <Row>
          {myFav &&
            myFav.map((element, index) => {
              return (
                <Col className="col-12 col-lg-3 col-md-6 col-sm-12">
                  <Card
                    style={{
                      borderRadius: "20px",
                      transition: "all 0.3s ease 0s",
                      marginTop: "10%",
                    }}
                  >
                    <Link to={`/movie/${element.id}`}>
                      <Card.Img
                        alt={element.title}
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                        style={{ cursor: "pointer", borderRadius: "20px" }}
                        onClick={<moviePage />}
                      />
                    </Link>
                    <Card.Body>
                      
                    <Button style={{display:'flex', justifyContent:"center", marginLeft:"10%", marginTop:"1%", marginBottom:"1%", width:"80%", backgroundColor:"red"}}
        variant="success"
        onClick={() => {
         
          delFav();
        }}
      >
         X
      </Button>{" "}
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

export default Favorites;
