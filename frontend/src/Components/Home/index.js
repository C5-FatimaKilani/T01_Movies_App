import React from "react";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={`https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS`} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Doctor Strange in the Multiverse of Madness</Card.Title>
        <Card.Text>
        Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
  );
};

export default Home;
