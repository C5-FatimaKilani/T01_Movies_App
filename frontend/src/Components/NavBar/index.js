import { React } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap'
import { BiDonateHeart } from "react-icons/bi";
import logo from "./mylogo.png";
import logoName from "./logoName.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{display:"flex", justifyContent:"space-evenly"}} href="#">
            <Image
              alt=""
              src={logo}
              width="200"
              height="85"              className="d-inline-block align-top"
             
            />
            {/* <Image
              alt=""
              src={logoName}
              width="200"
              height="85"              className="d-inline-block align-top"
             
            /> */}
            
            {" "}
            
          
            <Link to="/fav"> <p >Favorites</p><i class="bi bi-balloon-heart"></i></Link> 
          </Navbar.Brand>
          
        </Container>
      </Navbar> 
      
    </div>
  );
};
 {/* <LinkContainer to="/favorites">
      <Nav.Link><BiDonateHeart /></Nav.Link>
      </LinkContainer> */}
export default NavBar;
