import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import App from "../App";
// import Blog from "./portfolio/src/Component/Blog.js";

function NavNew() {
  return (
    <>
      <Navbar bg="secondary mb-5" variant="white">
        <Container>
        
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              H O M E
            </Nav.Link>
            <Nav.Link as={Link} to={"/blog"}>
              BLOG
            </Nav.Link>
            <Nav.Link as={Link} to={"/bio"}>
              BIO
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"}>
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavNew;
