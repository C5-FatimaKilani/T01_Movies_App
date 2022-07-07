import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";

import "./style.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const mySearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1bfa430aada4409bfa6a3c5528128e8a&query=${inputVal}`
      )
      .then((result) => {
        console.log(result);
        setMovies(result);
      })
      .catch((error) => {});
  };

  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          style={{ height: "500px" }}
          src={`https://image.tmdb.org/t/p/w500/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg`}
          alt="Card image"
        />
        <Card.ImgOverlay style={{ marginTop: "20%" }}>
          <Card.Title style={{ fontSize: "250%" }}>
            Doctor Strange in the Multiverse of Madness
          </Card.Title>
          <Card.Text>
            Doctor Strange, with the help of mystical allies both old and new,
            traverses the mind-bending and dangerous alternate realities of the
            Multiverse to confront a mysterious new adversary.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      {/* {movies.length &&
        movies.map((elem) => {
          return(<> */}
          <InputGroup
            className="mb-5 "
            style={{
              marginTop: "-7%",
              marginBottom: "20%",
              width: "70%",
              marginLeft: "15%",
            }}
          >
            <Form.Control
              aria-label="Text input with dropdown button"
              placeholder="What Are You Searching About"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
            />
            <SplitButton
              variant="outline-secondary"
              title="Search"
              id="segmented-button-dropdown-2"
              alignRight
              onClick={mySearch}
            ></SplitButton>
          </InputGroup>;
          {/* </>)
          
        })} */}
    </div>
  );
};

export default Home;
