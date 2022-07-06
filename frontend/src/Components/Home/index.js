import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css"

const Home = () => {
  return (
    <div>
    <Card className="bg-dark text-white">
      <Card.Img style={{height:"500px"}} src={`https://image.tmdb.org/t/p/w500/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg`} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Doctor Strange in the Multiverse of Madness</Card.Title>
        <Card.Text>
        Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
    <form action="" style={{marginTop:"5%", width:"80px"}} />
          <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div class="input-group">
              <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light" />
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Home;
