import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Blog from "./portfolio/src/Component/Blog.js";

function NavNew() {

  return (
    <>
      <nav>
        <Navbar className="nav" expand="md">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                <b> H O M E </b> &#160; &#160; &#160;
              </Nav.Link>
              <Nav.Link as={Link} to={"/blog"}>
                B L O G &#160; &#160;
              </Nav.Link>
              <Nav.Link as={Link} to={"/bio"}>
                B I O &#160; &#160;
              </Nav.Link>
              <Nav.Link as={Link} to={"/projects"}>
                P R O J E C T S &#160; &#160;
              </Nav.Link>
              {/* <Nav.Link as={Link} to={"/contact"}>
              C O N T A C T &#160; &#160;
            </Nav.Link> */}
            </Nav>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/mariola-hullings-9579b6238/"
            >
              <img
                src="./Image/linkedin.svg"
                className="btnSVG"
                alt="Linkedin Logo"
              />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/MariolaH"
            >
              <img
                src="./Image/github.svg"
                className="btnSVG"
                alt="Github Logo"
              />
            </a>
          </Container>
        </Navbar>
      </nav>
    </>
  );
}

export default NavNew;