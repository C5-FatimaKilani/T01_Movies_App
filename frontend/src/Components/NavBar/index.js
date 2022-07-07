import { React } from "react";
import { Image, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import { BiDonateHeart } from "react-icons/bi";
import "./style.css"
import logo from "./logo.png";
import { Link } from "react-router-dom";

const NavBar = ({ favorites, setFavorites }) => {
  return (
    <div>
      <Navbar className="navbar"  variant="dark">
        <Container>
          <Navbar.Brand
            style={{ display: "flex", justifyContent: "space-evenly" }}
            href="#"
          >
            <LinkContainer to={"/"}>
              <Image
                alt=""
                src={logo}
                width="100"
                height="85"
                className="d-inline-block align-top"
              />
            </LinkContainer>
            <Card.Text style={{fontSize:"200%" , marginLeft:"10%", marginTop:"2%", fontFamily:"monospace"}}>Stream App</Card.Text>
            <Link to={"/fav"}>
              <svg
              className="svg"
                style={{ marginTop:"10px", marginLeft: "700%", color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </Link>
            {/* <Link > <p >Favorites</p></i></Link>  */}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
{
  /* <LinkContainer to="/favorites">
      <Nav.Link><BiDonateHeart /></Nav.Link>
      </LinkContainer> */
}
export default NavBar;
